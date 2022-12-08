<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15 pt-sm-10">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article class="blog-content">
              <h4 class="use-text-title2 title-blog">Data Privacy and Protection - Cybercrime</h4>
              <span class="caption">April 3, 2019 by Codematics</span>
              <figure class="image-blog">
                <img :src="imgAPI.blog[12]" alt="blog" />
              </figure>

              <h2>Data Privacy, a most highlighted topic in modern time-zone of technological world.</h2>
              <p>The word Data Privacy is not just a word only, its a most valuable asset and right of every single
                individual. From the last few decades technological journey is successfully achieving the milestone of
                its development phases. Things have become more advanced and automated beyond the limits. But there
                are several concerns in parallel to these achievements and success score. Because along with
                technological development, cyber-crime ratio is also increasing. This alarming issue is exposing flaws
                and drawback of various security policies relevant to personal data and technology. </p>
              <p>So let’s have a look into several factors relating Cybercrime and data breach in detailed manner.</p>
              <h3>What is <a href="https://en.wikipedia.org/wiki/Cybercrime">Cybercrime.?</a></h3>
              <p>“An illegal or criminal act using computer and network connection as main tool to hit down user
                personal data is called Cybercrime”. Any single person or group of individuals may be victim of this
                malicious attack. We can consider spamming, hacking, phishing, Dos attacks, SQL code injection, hate
                content, financial loss, stealing business secrets, bank transactions, ATM fraud, drug trading,
                pirated content and many more as examples of this crime.</p>
              <p>Cyber-criminals access your system network, breach its security walls and then steal whatever they
                want. That’s all now you are a victim of their tactical attack. But its not that much simple as it
                seems to be, there is a broad and experienced mind setup behind this game. Such criminals have a
                strong grip and control over the technological tools by every aspect to avoid identity and detection
                of source . Cyber-warfare is implement to generate money by negative means or to harm victims
                reputation physically or psychologically. </p>
              <div class="wp-block-image">
                <figure class="aligncenter"><img
                    src="http://www.codematics.co/wp-content/uploads/2019/04/Cybercrime1-1024x682.jpg"
                    alt="Data Privacy" class="wp-image-3370"></figure>
              </div>
              <h3>Types of Cyber Attacks:</h3>
              <p>There are various types of cyber attacks, we are going to discuss major among them.</p>
              <h4>Cryptojacking:</h4>
              <p>Secret Hijacking of victim’s browser or smart phone to undertake online access of financial
                operations. Criminals use cryptocurrency software (mining) in combination with JavaScript coding to
                secure financial transctions from target machine. While victim remains unaware of all the happening on
                his device. Cryptocurrency is defined as a digital currency method used as medium of exchange to
                safeguard financial transactions. </p>
              <h4>Cyber Extortion:</h4>
              <p>A Category of cyber attacks in which cyber-criminals target victim with threats and blackmailing.
                Regarding his personal data, reputation and other secrets. While demand money or any other thing in
                return according to their personal favor and interest. So they bound their target under psychological
                control.</p>
              <h4>Credit card Fraud:</h4>
              <p>When a cyber-criminal steals bank information of an account holder (credit/debit card) to make fund
                transactions and purchases from his account is termed as debit/credit card fraud. It may be physical
                stealing of credit card or online theft of information. This type of cyber attack is most common among
                the other types.</p>
              <h4>Cyber Espionage:</h4>
              <p>When an attacker targets any government entity or organization to steal or destroy its confidential
                data and workstation through online sources is called cyber espionage. This sort of crime is also
                termed as cyber spying and usually anti government bodies are involve in this malicious act. Other
                than that anti military aspects can also be linked with cyber espionage attack.</p>
              <h4>DDos Attacks:</h4>
              <p>DDos stands here for a Distributed Denial of Service which badly exploits operating system and its
                tools. It is a type of cyber attack in which series of effected systems with torjan virus are use to
                target a single machine. Purpose behind the DDos attack may be traffic attack where server become
                overloaded causing website crash. Other than that they can target bandwidth and application sources to
                interrupt network globally. </p>
              <div class="wp-block-image">
                <figure class="aligncenter"><img
                    src="http://www.codematics.co/wp-content/uploads/2019/04/cybercrime2-1024x568.jpg"
                    alt="Data Privacy" class="wp-image-3379"></figure>
              </div>
              <h3>How to protect Data Privacy from cyber attacks?</h3>
              <p>There are two sides to every story, similarly technological advancements have some risky factors
                along with its benefits and ease of life. So it may not be possible to completely avoid these
                circumstances. Fear of being trapped by cyber attacks will always remain a concern in minds of people.
                However some safety measures can be implement in both public and private sector to ensure maximum data
                protection and privacy against this terrifying mystery.</p>
              <ul>
                <li>Quick Response Force for cybercrime management.</li>
                <li>End to End encryption of every secret data and information.</li>
                <li>Awareness and training workshops on cyber attack and its precautionary measures.</li>
                <li>Strong database of passwords with regular changes.</li>
                <li>To avail cyber attack insurance policy.</li>
                <li>Anti-spy software on every operating system.</li>
              </ul>
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
import BlogHeader from '~/components/Header/NavScroll'
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
      title: 'Data Privacy and Protection | ' + brand.agency.desc
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
