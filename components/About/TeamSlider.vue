<template>
  <div class="bg-wrapper">
    <div class="carousel-wrap">
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
              :href="item.href"
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

.bg-wrapper {
  background: #ffffff !important;
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
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
      teamList: [
        {
          desc: 'Managing Director (MD) | Founder',
          title: "Malik Ahsan",
          img: imgAPI.team[1],
          href: "https://www.linkedin.com/in/malik-ahsan-ali-founder-codematics/"
        },
        {
          desc: 'CEO | Co-Founder',
          title: "Hammad Lodhi",
          img: imgAPI.team[2],
          href: "https://www.linkedin.com/in/muhammad-hammad-lodhi-19942b23/"
        },
        {
          desc: 'Director Development and Entrepreneurship | Co-Founder',
          title: "Waseem Javed",
          img: imgAPI.team[3],
          href: "https://www.linkedin.com/in/waseem-javed-3024a826/"
        },
        {
          desc: 'CTO | Full Stack Developer | Team Lead',
          title: "Umair Saeed Mughal",
          img: imgAPI.team[4],
          href: "https://www.linkedin.com/in/umair-saeed-mughal-208b8495/"
        },
        {
          desc: 'Int. Bussiness Development Officer (USA)',
          title: "Ihsan Mehdi",
          img: imgAPI.team[5],
          href: "https://www.linkedin.com/company/codematics-software-company/mycompany/"
        },
        {
          desc: 'Int. Bussiness Development Officer (Europe)',
          title: "Muhammad Asif",
          img: imgAPI.team[6],
          href: "https://www.linkedin.com/company/codematics-software-company/mycompany/"
        },
        {
          desc: '3D Modeler & Animator | Team Lead',
          title: "Kaleem Ahmad",
          img: imgAPI.team[8],
          href: "https://www.linkedin.com/in/ikaleemahmad/"
        },
        {
          desc: '3D Technical Director',
          title: "Muhammad Mursaleen",
          img: imgAPI.team[27],
          href:"https://www.linkedin.com/in/mursaleen-mohsin-b0097617a/"
        },
        {
          desc: '3D Animator | Modeler',
          title: "Umaima Malik",
          img: imgAPI.team[20],
          href: "https://www.linkedin.com/in/umaima-malik-5b3aa0197/"
        },
        {
          desc: '3D Expert',
          title: "Khalil Ur Rehman",
          img: imgAPI.team[18],
          href: "https://www.linkedin.com/in/khalil-ur-rehman-a13760201/"
        },
        {
          desc: 'Sr. Android Developer | Team Lead',
          title: "Siffat Ullah Shah",
          img: imgAPI.team[9],
          href: "https://www.linkedin.com/in/sifat-ullah-shah-b864a412a/"
        },
        {
          desc: 'Sr. Android Developer',
          title: "Ali Rehman",
          img: imgAPI.team[7],
          href: "https://www.linkedin.com/in/ali-rehman-08a656103/"
        },
        {
          desc: 'Sr. Android Developer',
          title: "Khurria Zafar",
          img: imgAPI.team[17],
          href: "https://www.linkedin.com/in/khurria-zafar-0737b1134/"
        },
        {
          desc: 'Android Developer',
          title: "Mishal Nawaz",
          img: imgAPI.team[37],
          href: "https://www.linkedin.com/in/mishal-nawaz/"
        },
        {
          desc: 'Unity 3D Game Developer | Team Lead',
          title: "Adil Hussain Shah",
          img: imgAPI.team[10],
          href: "https://www.linkedin.com/in/syed-adil-hussain-shah-3119a1125/"
        },
        {
          desc: 'Unity 3D Game Developer',
          title: "Aqsa Nadeem",
          img: imgAPI.team[21],
          href: "https://www.linkedin.com/in/aqsa-nadeem-075a18136/"
        },
        {
          desc: 'Game Designer',
          title: "Khizar Hayat",
          img: imgAPI.team[28],
          href: ""
        },
        {
          desc: 'Mobile App Developer IOS | Team Lead',
          title: "Zaid Ul Wahab",
          img: imgAPI.team[12],
          href: "https://www.linkedin.com/in/zaid-wahab-55638b20a/"
        },
        {
          desc: 'Sr. iOS Developer',
          title: "Ihsan Ullah",
          img: imgAPI.team[22],
          href: "https://www.linkedin.com/in/ihsaan-ullah/"
        },
        {
          desc: 'iOS Engineer',
          title: "Farhad Younas",
          img: imgAPI.team[23],
          href: "https://www.linkedin.com/in/farhad-jadoon/"
        },
        {
          desc: 'Full Stack Developer | Team Lead',
          title: "Muhammad Waqar",
          img: imgAPI.team[13],
          href: "https://www.linkedin.com/in/muhammad-waqar-khan-3073a3220/"
        },
        {
          desc: 'Full Stack Developer',
          title: "Shahzeb ur Rehman",
          img: imgAPI.team[11],
          href: "https://www.linkedin.com/in/sahibzada-shahzeb-561200147/"
        },
        {
          desc: 'Full Stack Developer',
          title: "Babar Ali Shah",
          img: imgAPI.team[14],
          href: "https://www.linkedin.com/in/babar-ali-shah-759764118/"
        },
        {
          desc: 'Web Developer',
          title: "Raja Usama",
          img: imgAPI.team[35],
          href: "https://www.linkedin.com/in/raja-usama-3b2980173/"
        },
        {
          desc: 'Digital Marketer | Team Lead',
          title: "Junaid Mir",
          img: imgAPI.team[15],
          href: "https://www.linkedin.com/in/junaid-mir-347033144/"
        },
        {
          desc: 'Digital Marketing Representitive | SEO Expert',
          title: "Uzair Khan Jadoon",
          img: imgAPI.team[25],
          href: "https://www.linkedin.com/in/uzair-khan-222373114/"
        },
        {
          desc: 'Digital Marketer | Program Manager Urraan',
          title: "Haris Riaz",
          img: imgAPI.team[31],
          href: "https://www.linkedin.com/in/haris-riaz-ba72091ba/"
        },
        {
          desc: 'Content Creator',
          title: "Maham Awan",
          img: imgAPI.team[26],
          href: "https://www.linkedin.com/in/maham-awan-a95455205/"
        },
        {
          desc: 'Social Media Designer',
          title: "Mehreen Gul",
          img: imgAPI.team[34],
          href: ""
        },
        {
          desc: 'Business Development Manager KARDAAN',
          title: "Sufyan Javed",
          img: imgAPI.team[29],
          href: "https://www.linkedin.com/in/sufyan-javed-5a4851a7/"
        },
        {
          desc: 'Community Manager KARDAAN',
          title: "Rameez Umer Khan",
          img: imgAPI.team[30],
          href: ""
        },
        {
          desc: 'UI/UX Product Designer | Team Lead',
          title: "Sadaam Hussain",
          img: imgAPI.team[16],
          href: "https://www.linkedin.com/in/saddam-shadab-923a0a109/"
        },
        {
          desc: 'Social Media Designer',
          title: "Anbar Rauf",
          img: imgAPI.team[19],
          href: "https://www.linkedin.com/in/anbar-rauf-bb00bb13a/"
        },
        {
          desc: 'Graphic Designer',
          title: "Fatima Zahid",
          img: imgAPI.team[33],
          href: "https://www.linkedin.com/in/fatima-zahid-0ba863125/"
        },
        {
          desc: 'Admin | Accounts Officer',
          title: "Obaid Ullah Khan",
          img: imgAPI.team[24],
          href: 'https://www.linkedin.com/in/obaid-ullah-khan-jadoon-646885b6/'
        },
        {
          desc: 'Admin Assistant',
          title: "Abu Huraira",
          img: imgAPI.team[32],
          href: ""
        },
      ]
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
