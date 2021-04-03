// app.js
App({
  onLaunch() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('a3fb2113c0a97830d15b')
    
    const self = this
    wx.BaaS.auth.getCurrentUser().then((res)=>{
      wx.setStorageSync('userInfo', res)
      self.globalData.userInfo = res
      },(err)=>{console.log('err', err)}
    )

  
  },

  globalData: {
    userInfo: wx.getStorageSync('userInfo')


  }
})
