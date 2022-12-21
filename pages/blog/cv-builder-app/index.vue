<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">CV Maker | Resume Builder</h4>
              <span class="caption">May 16, 2022 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[1]" alt="blog" />
              </figure>

              <h3>Click to Download for
                <a target="_blank" href="https://apps.apple.com/cz/app/cv-maker-resume-builder/id1608333252">iOS</a> and
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=codematics.cv.resume.builder.jobs">Android</a>
              </h3>
              <p>Resume CV Builder app is a free and effective resume maker with an intuitive user interface that
                facilitates the
                creation of a convincing and professional resume with multiple data-driven templates in a matter of
                minutes to land
                a dream job.</p>
              <p>Spending hours and days to build a professional resume? Resume CV builder app is a free, simple yet
                productive app
                tailored to effortlessly create a representative, persuasive and streamlined resume based on the job
                requirements in
                several clicks rather than hours. This CV template builder allows the users to generate and manage
                various resumes
                quickly in an organized manner with a broad range of customization options and supplemental features.
              </p>
              <p>Crafting competitive resumes has never been this simple and easy! With the quick, attractive, and
                user-friendly
                interface, you can easily share your resume in PDF format with the world to get your dream job.
                Notably, the
                standout feature of Resume CV Builder over other similar apps is that it permits the users to skip the
                sections
                (experience, background info, etc) they don’t want to add as it comes down to personal preferences and
                it won’t
                appear on the resume. Moreover, the inclusion of profile pictures is also not mandatory in the CV
                template builder.
              </p>
              <strong>Resume CV Builder App Offers Unique Features</strong>
              <ul class="list">
                <li>Simple yet attractive interface</li>
                <li>Professionally designed templates</li>
                <li>Easy saving and sharing option</li>
                <li>Broad customisation options</li>
                <li>Allows to rename the file</li>
                <li>Offers to skip sections to meet user’s needs</li>
                <li>Multi-platform compatible resumes in PDF format</li>
              </ul>
              <p>It offers a complete solution for those seeking hands-off resume creation services and makes the CV
                building
                process easier and quicker. You just need to add personal details once, like qualification,
                competencies/skills, and
                experience that could be used in any template with a single click.</p>
              <p>So save your time plus energy and get your hands on a professional template format editor to create
                your own.
                Download the resume builder app free CV maker and enjoy seeking new opportunities and a dream career.
              </p>
              <p>If you’ve any suggestions regarding the Resume CV Builder app, feel free to comment below.</p>
            </article>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../../../components/Blog/blog-style.scss';
@import '~/assets/pages';

h3 {
  padding-bottom: 15px !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import BlogHeader from '~/components/Header/Main'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Sidebar,
  },
  head() {
    return {
      title: 'CV Maker | Resume Builder | ' + brand.agency.desc
    }
  },
  data() {
    return {
      imgAPI: imgAPI,
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
