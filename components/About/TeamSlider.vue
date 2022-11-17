<template>
  <u-animate-container>
      <v-container class="carousel-header">
        <v-row>
          <v-col cols="12" md="12">
              <h2 class="title-primary">{{ $t('services.section_title') }}</h2>
              <p class="special-p">{{ $t('services.section_para') }}</p>
          </v-col>
        </v-row>
      </v-container>

       <div class="carousel mt-15" v-if="loaded">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div v-for="(item, index) in teamList" :key="index" class="item px-3">
            <product-card2
              :title="item.title"
              :desc="item.desc"
              :img="item.img"
              type="full"
              orientation="potrait"
            />
          </div>
        </slick>
      </div>
  </u-animate-container>

  <!-- <div class="bg-wrapper">
    <div class="team-root">
      <v-container>
        <h4 class="use-text-title2 use-text-primary mb-3 title-primary">
          {{ $t('team.section_title') }}
        </h4>
        <p class="special-p use-text-subtitle2">{{ $t('team.section_para') }} </p>
      </v-container>

      <div class="carousel mt-15" v-if="loaded">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div v-for="(item, index) in teamList" :key="index" class="item px-3">
            <product-card2
              :title="item.title"
              :desc="item.desc"
              :img="item.img"
              type="full"
              orientation="potrait"
            />
          </div>
        </slick>
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
@import './about-style.scss';

  .title-primary {
    margin-bottom: 9px !important;
    line-height: 1.2 !important;
    color: var(--v-primary-base) !important;
    text-transform: uppercase !important;
    font-size: 29px;
  }

  .bg-wrapper {
    background: var(--v-primary-lighten5) !important; 
  }

  .special-p {
    font-size: 18px !important;
    color: #777777 !important;
  }

</style>

<script>
import ProductCard2 from '../Cards/ProductCard2'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    ProductCard2,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      fase: false,
      slickOptions: {
        dots: true,
        infite: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: false,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      teamList: [
        {
          desc: 'Managing Director (MD) | Founder',
          title: "Malik Ahsan",
          img: imgAPI.team[1],
        },
        {
          desc: 'CEO | Co-Founder',
          title: "Hammad Lodhi",
          img: imgAPI.team[2],
        },
        {
          desc: 'Director Development and Entrepreneurship | Co-Founder',
          title: "Waseem Javed",
          img: imgAPI.team[3],
        },
        {
          desc: 'CTO | Full Stack Developer | Team Lead',
          title: "Umair Saeed Mughal",
          img: imgAPI.team[4],
        },
        {
          desc: 'Int. Bussiness Development Officer (USA)',
          title: "Ihsan Mehdi",
          img: imgAPI.team[5],
        },
        {
          desc: 'Int. Bussiness Development Officer (Europe)',
          title: "Muhammad Asif",
          img: imgAPI.team[6],
        },
        {
          desc: '3D Modeler & Animator | Team Lead',
          title: "Kaleem Ahmad",
          img: imgAPI.team[8],
        },
        {
          desc: '3D Technical Director',
          title: "Muhammad Mursaleen",
          img: imgAPI.team[24],
        },
        {
          desc: '3D Animator | Modeler',
          title: "Umaima Malik",
          img: imgAPI.team[19],
        },
        {
          desc: '3D Expert',
          title: "Khalil Ur Rehman",
          img: imgAPI.team[33],
        },
        {
          desc: 'Sr. Android Developer | Team Lead',
          title: "Siffat Ullah Shah",
          img: imgAPI.team[9],
        },
        {
          desc: 'Sr. Android Developer',
          title: "Ali Rehman",
          img: imgAPI.team[7],
        },
        {
          desc: 'Sr. Android Developer',
          title: "Khurria Zafar",
          img: imgAPI.team[17],
        },
        {
          desc: 'Android Developer',
          title: "Mishal Nawaz",
          img: imgAPI.team[36],
        },
        {
          desc: 'Unity 3D Game Developer | Team Lead',
          title: "Adil Hussain Shah",
          img: imgAPI.team[10],
        },
        {
          desc: 'Unity 3D Game Developer',
          title: "Aqsa Nadeem",
          img: imgAPI.team[20],
        },
        {
          desc: 'Game Designer',
          title: "Khizar Hayat",
          img: imgAPI.team[25],
        },
        {
          desc: 'Mobile App Developer IOS | Team Lead',
          title: "Zaid Ul Wahab",
          img: imgAPI.team[12],
        },
        {
          desc: 'Sr. IOS Developer',
          title: "Ihsan Ullah",
          img: imgAPI.team[21],
        },
        {
          desc: 'iOS Engineer',
          title: "Farhad Younas",
          img: imgAPI.team[34],
        },
        {
          desc: 'Full Stack Developer | Team Lead',
          title: "Muhammad Waqar",
          img: imgAPI.team[13],
        },
        {
          desc: 'Full Stack Developer',
          title: "Shahzeb ur Rehman",
          img: imgAPI.team[11],
        },
        {
          desc: 'Full Stack Developer',
          title: "Babar Ali Shah",
          img: imgAPI.team[14],
        },
        {
          desc: 'Web Developer',
          title: "Raja Usama",
          img: imgAPI.team[30],
          cover: imgAPI.team[0]
        },
        {
          desc: 'Digital Marketer | Team Lead',
          title: "Junaid Mir",
          img: imgAPI.team[15],
        },
        {
          desc: 'Digital Marketing Representitive | SEO Expert',
          title: "Uzair Khan Jadoon",
          img: imgAPI.team[23],
        },
        {
          desc: 'Digital Marketer | Program Manager Urraan',
          title: "Haris Riaz",
          img: imgAPI.team[28],
        },
        {
          desc: 'Content Creator',
          title: "Maham Awan",
          img: imgAPI.team[32],
        },
        {
          desc: 'Social Media Designer',
          title: "Mehreen Gul",
          img: imgAPI.team[35],
        },
        {
          desc: 'Business Development Manager KARDAAN',
          title: "Sufyan Javed",
          img: imgAPI.team[26],
        },
        {
          desc: 'Community Manager KARDAAN',
          title: "Rameez Umer Khan",
          img: imgAPI.team[27],
        },
        {
          desc: 'UI/UX Product Designer | Team Lead',
          title: "Sadaam Hussain",
          img: imgAPI.team[16],
        },
        {
          desc: 'Social Media Designer',
          title: "Anbar Rauf",
          img: imgAPI.team[18],
        },
        {
          desc: 'Graphic Designer',
          title: "Fatima Zahid",
          img: imgAPI.team[31],
        },
        {
          desc: 'Admin | Accounts Officer',
          title: "Obaid Ullah Khan",
          img: imgAPI.team[22],
        },
        {
          desc: 'Admin Assistant',
          title: "Abu Huraira",
          img: imgAPI.team[29],
        },
      ]
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
