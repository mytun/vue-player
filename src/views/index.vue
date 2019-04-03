<template>
  <div class="container">
    <div class="row" style="margin-top:10px"/>
    <div class="row">
      <div class="hy-layout clearfix">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <div class="swiper-container hy-slide">
            <div class="swiper-wrapper">
              <div v-for="(u,index) in index" :key="index" class="swiper-slide" >
                <div class="hy-video-slide" >
                  <a :style="'padding-top: 60%; background: url('+ u.imgsrc + ')  no-repeat; background-position:50% 50%; background-size: cover;'" :href="u.ahref" class="videopic">
                    <span class="title" style="text-align: left;padding-left: 10px;padding-right: 10px;" v-text="u.spab">sdasdsdad</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-button-next hidden-xs">
              <i class="icon iconfont icon-right"/>
            </div>
            <div class="swiper-button-prev hidden-xs">
              <i class="icon iconfont icon-back"/>
            </div>
            <div class="swiper-pagination"/>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 padding-0">
          <div class="hy-index-menu clearfix">
            <div class="item">
              <ul class="clearfix">
                <li><a href="/list?type=dianying"><i class="icon iconfont icon-menu1 text-color"/><span>电影</span></a></li>
                <li><a href="/list?type=dianshi"><i class="icon iconfont icon-ic_mymatch_ranking text-color"/><span>电视剧</span></a></li>
                <li><a href="/list?type=dongman"><i class="icon iconfont icon-update text-color"/><span>动漫</span></a></li>
                <li><a href="/list?type=zongyi"><i class="icon iconfont icon-member1 text-color"/><span>综艺</span></a></li>

              </ul>
            </div>
          </div>
          <div class="hy-index-tags hidden-md clearfix">
            <div class="item">
              <ul class="clearfix">
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=100">爱情</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=106">动作</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=102">恐怖</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=104">科幻</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=112">剧情</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=105">犯罪</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=113">奇幻</a></li>
                <li><a href="/list?type=dianying&year=all&area=all&act=all&cat=108">战争</a></li>
              </ul>
            </div>
          </div>
          <div class="hy-right-qrcode hidden-sm hidden-xs">
            <div class="item">
              <dl class="clearfix">
                <dt><img src="@/images/qrcode.png"></dt>
                <dd>
                  <h4>扫描二维码“手机看大片”</h4>
                  <p class="text-muted">
                    也可以分享到朋友圈哦！
                  </p>
                  <p class="margin-0 text-muted">
                    http://localhost:3000/
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" style="margin-top:10px"/>
      </div>
    </div>
  </div>
</template>
<script>
import { indxhtml } from '@/api/index'
import Swiper from 'swiper'
export default {
  name: 'Index',
  data() {
    return {
      index: [
        {
          ahref: '/play?play=/tv/PbVrb07lRWXmM3.html',
          imgsrc: 'https://p.ssl.qhimg.com/t012fcae1ce294e4f17.jpg',
          spab: '风再起时陆毅袁泉改革年代并肩同行，相濡以沫共度浮沉时代我和我的经纪人朱亚文首录跑男坦言太累冷案警花揭陈年冷案真相声临其境 第二季张韶涵潘粤明惊喜助阵廉政风云刘青云张家辉还原巨额大案'
        },
        {
          ahref: '/play?play=/tv/PbVrb07lRWXmM3.html',
          imgsrc: 'https://p.ssl.qhimg.com/t014c1ff4bd73e35914.jpg',
          spab: '风再起时陆毅袁泉改革年代并肩同行，相濡以沫共度浮沉时代我和我的经纪人朱亚文首录跑男坦言太累冷案警花揭陈年冷案真相声临其境 第二季张韶涵潘粤明惊喜助阵廉政风云刘青云张家辉还原巨额大案'
        },
        {
          ahref: '/play?play=/tv/PbVrb07lRWXmM3.html',
          imgsrc: 'https://p.ssl.qhimg.com/t014c1ff4bd73e35914.jpg',
          spab: '风再起时陆毅袁泉改革年代并肩同行，相濡以沫共度浮沉时代我和我的经纪人朱亚文首录跑男坦言太累冷案警花揭陈年冷案真相声临其境 第二季张韶涵潘粤明惊喜助阵廉政风云刘青云张家辉还原巨额大案'
        }
      ]
    }
  },
  computed: {
  },
  mounted() {
    this.indxhtmlH()
    new Swiper('.hy-slide', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 3000,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
  },
  methods: {
    getBody(content) {
      var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/
      var result = REG_BODY.exec(content)
      if (result && result.length === 2) {
        return result[1]
      }
      return content
    },
    indxhtmlH() {
      indxhtml().then(res => {
        console.log(this.getBody(res))
      })
    }
  }
}
</script>
