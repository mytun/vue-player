<template>
  <section class="index">
    <div class="weixin-tip">
      <p>
        <img src="@/images/live_weixin.png" width="100%" alt="微信打开" >
      </p>
    </div>
    <div class="hy-head-menu">
      <div class="container">
        <div class="row">
          <div class="item">
            <div class="logo hidden-xs">
              <a class="hidden-sm hidden-xs" href="/">
                <img src="@/images/20171010060448_78472.png" >
              </a>
              <a class="visible-sm visible-xs" href="/">
                <img src="@/images/20171010060448_78472.png" >
              </a>
            </div>
            <div class="search">
              <form id="ff-search" role="search" action="/seacher" method="get">
                <input id="ff-wd" class="form-control" placeholder="输入影片关键词..." type="text" name="wd" required="">
                <input type="submit" class="hide">
                <a href="javascript:" class="btns" title="搜索" >
                  <i class="icon iconfont icon-search"/>
                </a>
              </form>
            </div>
            <ul class="menulist hidden-xs">
              <li><a href="/">首页</a></li>
              <li ><a href="/list?type=dianying">电影</a></li>
              <li ><a href="list?type=dianshi">电视剧</a></li>
              <li ><a href="list?type=dongman">动漫</a></li>
              <li ><a href="list?type=zongyi">综艺</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view :key="key"/>
    <div class="hy-gototop hidden-sm hidden-xs">
      <ul class="item clearfix">
        <li class="codehover"><a href="javascript:void(0)" title="二维码"><i class="icon iconfont icon-code1"/></a>
          <div class="code clearfix">
            <p class="margin-0">
              <img class="pic-responsive" src="@/images/qrcode.png" alt="扫描二维码">
            </p>
          </div>
        </li>
        <li>
          <a data-toggle="tooltip" data-placement="top" class="" title="返回顶部">
            <i class="icon iconfont icon-uparrow"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="tabbar visible-xs">
      <a href="/" class="item ">
        <i class="icon iconfont icon-home"/>
        <p class="text">首页</p>
      </a>
      <a href="/list?type=dianying" class="item ">
        <i class="icon iconfont icon-film"/>
        <p class="text">电影</p>
      </a>
      <a href="/list?type=dianshi" class="item ">
        <i class="icon iconfont icon-show"/>
        <p class="text">电视剧</p>
      </a>
      <a href="/list?type=dongman" class="item ">
        <i class="icon iconfont icon-mallanimation"/>
        <p class="text">动漫</p>
      </a>
      <a href="/list?type=zongyi" class="item ">
        <i class="icon iconfont icon-flag"/>
        <p class="text">综艺</p>
      </a>
    </div>
    <div class="container">
      <div class="row">
        <div class="hy-footer clearfix"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style scoped>

</style>

