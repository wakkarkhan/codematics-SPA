<template>
  <div class="bg-wrapper">
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
              :img="item.img"
              :name="item.name"
              :title="item.title"
              type="full"
              orientation="potrait"
            />
          </div>
        </slick>
      </div>
    </div>
  </div>
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
      slickOptions: {
        dots: true,
        infite: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: true,
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
          title: 'Managing Director (MD) | Founder',
          name: "Malik Ahsan",
          img: imgAPI.team[1],
          cover: imgAPI.team[0]
        },
        {
          title: 'CEO | Co-Founder',
          name: "Hammad Lodhi",
          img: imgAPI.team[2],
          cover: imgAPI.team[0]
        },
        {
          title: 'Director Development and Entrepreneurship | Co-Founder',
          name: "Waseem Javed",
          img: imgAPI.team[3],
          cover: imgAPI.team[0]
        },
        {
          title: 'CTO | Full Stack Developer | Team Lead',
          name: "Umair Saeed Mughal",
          img: imgAPI.team[4],
          cover: imgAPI.team[0]
        },
        {
          title: 'Int. Bussiness Development Officer (USA)',
          name: "Ihsan Mehdi",
          img: imgAPI.team[5],
          cover: imgAPI.team[0]
        },
        {
          title: 'Int. Bussiness Development Officer (Europe)',
          name: "Muhammad Asif",
          img: imgAPI.team[6],
          cover: imgAPI.team[0]
        },
        {
          title: '3D Modeler & Animator | Team Lead',
          name: "Kaleem Ahmad",
          img: imgAPI.team[8],
          cover: imgAPI.team[0]
        },
        {
          title: '3D Technical Director',
          name: "Muhammad Mursaleen",
          img: imgAPI.team[24],
          cover: imgAPI.team[0]
        },
        {
          title: '3D Animator | Modeler',
          name: "Umaima Malik",
          img: imgAPI.team[19],
          cover: imgAPI.team[0]
        },
        {
          title: '3D Expert',
          name: "Khalil Ur Rehman",
          img: imgAPI.team[33],
          cover: imgAPI.team[0]
        },
        {
          title: 'Sr. Android Developer | Team Lead',
          name: "Siffat Ullah Shah",
          img: imgAPI.team[9],
          cover: imgAPI.team[0]
        },
        {
          title: 'Sr. Android Developer',
          name: "Ali Rehman",
          img: imgAPI.team[7],
          cover: imgAPI.team[0]
        },
        {
          title: 'Sr. Android Developer',
          name: "Khurria Zafar",
          img: imgAPI.team[17],
          cover: imgAPI.team[0]
        },
        {
          title: 'Android Developer',
          name: "Mishal Nawaz",
          img: imgAPI.team[36],
          cover: imgAPI.team[0]
        },
        {
          title: 'Unity 3D Game Developer | Team Lead',
          name: "Adil Hussain Shah",
          img: imgAPI.team[10],
          cover: imgAPI.team[0]
        },
        {
          title: 'Unity 3D Game Developer',
          name: "Aqsa Nadeem",
          img: imgAPI.team[20],
          cover: imgAPI.team[0]
        },
        {
          title: 'Game Designer',
          name: "Khizar Hayat",
          img: imgAPI.team[25],
          cover: imgAPI.team[0]
        },
        {
          title: 'Mobile App Developer IOS | Team Lead',
          name: "Zaid Ul Wahab",
          img: imgAPI.team[12],
          cover: imgAPI.team[0]
        },
        {
          title: 'Sr. IOS Developer',
          name: "Ihsan Ullah",
          img: imgAPI.team[21],
          cover: imgAPI.team[0]
        },
        {
          title: 'iOS Engineer',
          name: "Farhad Younas",
          img: imgAPI.team[34],
          cover: imgAPI.team[0]
        },
        {
          title: 'Full Stack Developer | Team Lead',
          name: "Muhammad Waqar",
          img: imgAPI.team[13],
          cover: imgAPI.team[0]
        },
        {
          title: 'Full Stack Developer',
          name: "Shahzeb ur Rehman",
          img: imgAPI.team[11],
          cover: imgAPI.team[0]
        },
        {
          title: 'Full Stack Developer',
          name: "Babar Ali Shah",
          img: imgAPI.team[14],
          cover: imgAPI.team[0]
        },
        {
          title: 'Web Developer',
          name: "Raja Usama",
          img: imgAPI.team[30],
          cover: imgAPI.team[0]
        },
        {
          title: 'Digital Marketer | Team Lead',
          name: "Junaid Mir",
          img: imgAPI.team[15],
          cover: imgAPI.team[0]
        },
        {
          title: 'Digital Marketing Representitive | SEO Expert',
          name: "Uzair Khan Jadoon",
          img: imgAPI.team[23],
          cover: imgAPI.team[0]
        },
        {
          title: 'Digital Marketer | Program Manager Urraan',
          name: "Haris Riaz",
          img: imgAPI.team[28],
          cover: imgAPI.team[0]
        },
        {
          title: 'Content Creator',
          name: "Maham Awan",
          img: imgAPI.team[32],
          cover: imgAPI.team[0]
        },
        {
          title: 'Social Media Designer',
          name: "Mehreen Gul",
          img: imgAPI.team[35],
          cover: imgAPI.team[0]
        },
        {
          title: 'Business Development Manager KARDAAN',
          name: "Sufyan Javed",
          img: imgAPI.team[26],
          cover: imgAPI.team[0]
        },
        {
          title: 'Community Manager KARDAAN',
          name: "Rameez Umer Khan",
          img: imgAPI.team[27],
          cover: imgAPI.team[0]
        },
        {
          title: 'UI/UX Product Designer | Team Lead',
          name: "Sadaam Hussain",
          img: imgAPI.team[16],
          cover: imgAPI.team[0]
        },
        {
          title: 'Social Media Designer',
          name: "Anbar Rauf",
          img: imgAPI.team[18],
          cover: imgAPI.team[0]
        },
        {
          title: 'Graphic Designer',
          name: "Fatima Zahid",
          img: imgAPI.team[31],
          cover: imgAPI.team[0]
        },
        {
          title: 'Admin | Accounts Officer',
          name: "Obaid Ullah Khan",
          img: imgAPI.team[22],
          cover: imgAPI.team[0]
        },
        {
          title: 'Admin Assistant',
          name: "Abu Huraira",
          img: imgAPI.team[29],
          cover: imgAPI.team[0]
        },
      ]
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
