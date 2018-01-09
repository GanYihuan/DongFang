import React from 'react';
import {
  AsyncStorage
} from 'react-native';
import GitHubTrending from 'GitHubTrending';


export let FLAG_STORAGE = {
  flag_popular: 'popular',
  flag_trending: 'trending'
}


export default class DataRepository {
  constructor(flag) {
    this.flag = flag;
    if (flag === FLAG_STORAGE.flag_trending) {
      this.trending = new GitHubTrending();
    }
  }

  saveReopsitory(url, items, callback) {
    if (!items || !url) return;
    let wrapData = {
      items: items,
      // 标识
      update_date: new Date().getTime()
    }
    AsyncStorage.setItem(url, JSON.stringify(wrapData), callback);
  }

  fetchRepository(url) {
    return new Promise((resolve, reject) => {
      this.fetchlocalRepository(url)
          .then(result => {
            if (result) {
              resolve(result);
            } else {
              this.fetchNetRepository(url)
                  .then(result => {
                    resolve(result);
                  })
                  .catch(e => {
                    resolve(e);
                  })
            }
          })
          .catch(e => {
            this.fetchNetRepository(url)
                .then(result => {
                  resolve(result);
                })
                .catch(e => {
                  resolve(e);
                })
          })
    })
  }

  /**
   * get local data
   * @param url
   * @returns {promise}
   */
  fetchlocalRepository(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result));
          } catch (e) {
            resolve(result);
          }
        } else {
          reject(error);
        }
      })
    })
  }

  fetchNetRepository(url) {
    return new Promise((resolve, reject) => {
      if (this.flag === FLAG_STORAGE.flag_trending) {
        this.trending.fetchTrending(url)
            .then(result => {
              if (!result) {
                reject(new Error('responseData is null Gan!'));
                return;
              }
              this.saveReopsitory(url, result);
              resolve(result);
            })
      } else {
        fetch(url)
            .then(response => response.json())
            .then(result => {
              if (!result) {
                reject(new error('responsedata it is null'));
                return;
              }
              resolve(result.items);
              this.saveRepository(url, result.items);
            })
            .catch(err => {
              reject(err)
            })
      }

    })
  }

  /**
   * Judge whether the data out of date
   * @param longtime
   * @returns {boolean}
   */
  checkdate(longtime) {
    return false;
    let cdate = new Date();
    let tdate = new Date();
    tdate.setTime(longtime);
    if (cdate.getMonth() !== tdate.getMonth()) return false;
    if (cdate.getDay() !== tdate.getDay()) return false;
    if (cdate.getHours() - tdate.getHours() > 4) return false;
    return true;
  }
}

