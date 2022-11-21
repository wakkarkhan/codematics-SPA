<template>
  <div class="main-wrap">
    <main-header />

    <div class="container-general pt-8">
      <v-container class="py-10">
        <v-row>
          <v-col cols="12" md="12">
            <p><strong>Effective Date:</strong> March 7, 2017. Last revised on March 7, 2017.</p>
            <p><strong>Privacy Policy</strong></p>
            <p>CodeMatics Services Pvt. Ltd. (“<strong>CodeMatics</strong>,” “<strong>us</strong>” or
              “<strong>we</strong>“) recognizes that privacy is important, and we value and take steps to ensure the
              privacy of our users. This Privacy Policy (“Policy”) applies to your use of the Mobile applications on all
              platforms (the “Application”, “Apps” or “Applications”), the related services we provide (“Services”) and
              the Site.</p>
            <p>CodeMatics has created this Policy to explain our privacy practices so you will understand what
              information about you is collected, used and disclosed with respect to the Applications, the Services and
              the Site.</p>
            <p>This Policy covers <strong>our</strong> collection, use and disclosure of your information through the
              Applications, the Services and the Site. It <strong>does not</strong> cover any collection, use or
              disclosure by third parties through any applications, Web sites, products or services that we do not
              control or own, or any third party features or services made available through an Application, the
              Services or the Site. All trademarks, trade names, and logos of third parties featured on the Applications
              or the Site belong to their respective owners.</p>
            <ol class="pt-4">
              <li><strong>CONSENT AND MODIFICATION</strong></li>
              <p>By using the Services, you consent to the terms of this Privacy Policy and to our collection,
                processing and sharing of Personal Information for the purposes set forth herein.&nbsp; If you do not
                agree to this Privacy Policy, please do not access or otherwise use the Services.&nbsp; We reserve the
                right, at our sole discretion, to change, modify or otherwise alter this Policy at any time. You can
                find the most recent version of this Policy at&nbsp;<a href="privacy-policy"><strong>Privacy
                    Policy</strong></a>, with the date of last
                modification noted above. Such change will be effective fifteen (15) days following posting of the
                revised Privacy Policy on the App or the Site, and your continued use of the Services thereafter means
                that you accept those changes. Please note that none of our employees or agents has the authority to
                vary any of our Policies.</p>
              <p>&nbsp;</p>
              <li><strong>WHAT KIND OF INFORMATION WE COLLECT</strong></li>
              <p><strong>Personal Information.</strong></p>
              <p>At CodeMatics, <strong>we do not collect any Personal Information</strong> when you use any of our
                Applications, the Services and/or the Site. “Personal Information” is defined as the information that
                identifies you or another person, which may be transmitted or received when you use an Application, the
                Services and/or the Site. Personal Information includes your geographic location information, names,
                physical addresses, email addresses, telephone, fax and other device numbers, social security numbers,
                calendar entries stored within your Device, contact entries stored within your Device, files, content,
                photographs, location information and other metadata in photographs and other information you transmit
                or receive using an Application, the Services, and/or the Site which identifies you or another person.
                Personal Information also includes information about you or others that may be accessed by our system
                directly from your Device, including from your address book, location, photos or contacts folder, in
                order to enable certain features of an Application or the Services, such as the feature that finds and
                suggests mutual friends and other individuals who you may know. Unless you have elected to opt-out of
                providing your geographic location information, the Applications may use and store information related
                to the geographic location of your device and combine this information with other Personal Information
                to provide certain services, whether or not the Application is active.</p>
              <p>&nbsp;</p>
              <li><strong>USER PERMISSIONS for MOBILE APPS</strong></li>
              <p>Due to requirements of some platforms to take user permissions for accessing certain Personal
                Information for our Mobile Applications, we may ask users to allow these permissions in order for the
                apps to run some specific features. As stated earlier, CodeMatics do not collect any Personal
                Information from our users.</p>
              <p>&nbsp;</p>
              <li><strong>THIRD-PARTY SITES / ADVERTISEMENTS</strong></li>
              <p>In general, the Applications, the Services and the Site access third party information through
                application interfaces. The Application, the Services and/or the Site may also carry advertisements from
                other companies. When you click on links of third parties in an Application, the Services or the Site,
                you may leave the Application, the Services or the Site. This Policy does not address, and we are not
                responsible for, the privacy practices of Web sites operated by third parties, whether they are linked
                to or otherwise accessible from an Application, the Services or the Site. The inclusion of a link or
                accessibility of third party Web sites does not imply endorsement of such third party Web site by us.
              </p>
              <p>We shall not be liable for the collection, use and disclosure of your Personal Information by any third
                parties.</p>
              <p>&nbsp;</p>
              <li><strong>USERS WITH WHOM YOU SHARE YOUR INFORMATION</strong></li>
              <p>We cannot control the actions of other Users with whom you share your information. We cannot, and do
                not, control the information you share with other Users using an Application, the Services or the Site
                (including via Forums) or how such other Users will use or share such information. We are not
                responsible for third party circumvention of our security measures.</p>
              <p>&nbsp;</p>
              <li><strong>SECURITY</strong></li>
              <p>CodeMatics is very concerned about safeguarding the confidentiality of your information and we take
                concrete steps from our end to ensure your privacy. However, be aware that no security measures that we
                take to protect your information is absolutely guaranteed to avoid unauthorized access or use of your
                Personal / Non-Personal Information or is impenetrable.</p>
              <p>&nbsp;</p>
              <li><strong>CALIFORNIA PRIVACY RIGHTS</strong></li>
              <p>We do not disclose your Personal Information to third parties for the third parties’ direct marketing
                purposes, unless you first affirmatively agree to that disclosure.</p>
              <p>California Civil Code Section 1798.83 permits user who are California residents to request certain
                information regarding disclosure of Personal Information to third parties for their direct marketing
                purposes. If you would like more information with respect to your privacy rights under California law,
                you may contact us at the contact point below. Please reference your request as “California Privacy
                Policy Disclosure Information.”</p>
              <p>&nbsp;</p>
              <li><strong>SENSITIVE INFORMATION</strong></li>
              <p>We ask that you not send us, and you not disclose, any sensitive Personal Information (e.g.,
                information related to racial or ethnic origin, political opinions, religion or other beliefs, health,
                sexual orientation, criminal background or membership in past organizations, including trade union
                memberships) on or through an Application, the Services or the Site or otherwise to us.</p>
              <p>&nbsp;</p>
              <li><strong>CONTACTING US / REPORTING VIOLATIONS</strong></li>
            </ol>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <main-footer />
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-top: 18px;
  margin-bottom: 0px;
}
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  data() {
    return {
      imgAPI: imgAPI,
      link: link
    }
  },
  head() {
    return {
      title: 'Mobile App Development | ' + brand.agency.desc
    }
  },
  props: {
    number: {
      type: String,
      // default: 'mobile' // available props: mobile, web, game, modeling, graphic, digital
    }
  }
}
</script>
