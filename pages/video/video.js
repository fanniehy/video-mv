// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: true,
    videoPage: true,
    comment: false,
    adTime: 15,
    adFastTime: 5,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var adTimetimer = setInterval(() => {
      var nowTime = this.data.adTime - 1;
      this.setData({
        adTime: nowTime,
      })
      if (nowTime == 0 || nowTime < 0) {
        clearInterval(adTimetimer)
        this.setData({
          adTime: 0,
        }) 
      }
      console.log(this.data.adTime)
    }, 1000)
    var adFastTimetimer = setInterval(() => {
      var adFastTime = this.data.adFastTime - 1;
      this.setData({
        adFastTime: adFastTime
      })
      if (adFastTime == 0) {
        clearInterval(adFastTimetimer)
      }
    }, 1000)
  },
  closeAds: function(){
    this.setData({
      adTime: 0,
    }) 
    console.log(this.data.adTime)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  detail: function (e) {
    var flag = e.currentTarget.dataset.flag
    this.setData({
      content: false,
      flag: flag
    })
  },
  origin: function () {
    this.setData({
      content: true,
      videoPage: true,
      flag: false,
      comment: false
    })
  },
  creatComment: function () {
    this.setData({
      videoPage: false,
      comment: true
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
})