// pages/confirmation/confirmation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mealsordered: [],
    orders: [],
  },

  confirm() {
    // wx:for="{{mealsordered}}" wx:for-item="meal"


    wx.showModal({
      title: 'Order Confirmation',
      content: 'Total Cost: ' ,
      success: function(res) {
        if(res.confirm) {
          console.log('用户点击了确定')
        } else if(res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    let mealsordered = new wx.BaaS.TableObject('hackathon_meals')
    console.log(mealsordered)
    mealsordered.find().then(
      (res) => {
        console.log('res', res)
        self.setData({
          mealsordered: res.data.objects
        })
      }, (err) => {
          console.log("err", err)
      }
    );

    console.log(self.data.mealsordered)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onShareAppMessage: function () {

  }
})