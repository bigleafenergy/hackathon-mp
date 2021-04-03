// pages/menu/menu.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

   meals:[],

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    const self = this
    let Menu = new wx.BaaS.TableObject('hackathon_meals')
    console.log(Menu)
    Menu.find().then(
      (res) => {
        console.log('res', res)
        self.setData({
          meals: res.data.objects
        })
      }, (err) => {
          console.log("err", err)
      }
    )

  },

  createOrder: function(e) {
    console.log("orders", e)
    let order = new wx.BaaS.TableObject('hackathon_orders')
    let newOrder = order.create()
    newOrder.set({
      meal_id: e.currentTarget.dataset.meal_id,
      count: 1
    })

    newOrder.save().then((res)=>{
      wx.showToast({
        title: 'Ordered!',
      })
    }),
    console.log("afterOrder", this.data.meals)
  },
  
  navigateToConfirm: function (){
    wx.navigateTo({
      url: '/pages/confirmation/confirmation',
    })
  }

})