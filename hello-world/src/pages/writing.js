import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
  <div>
  <Header headerText="Writing" />
        <h3><u>Tech Features and Explainers</u></h3>
        <p><a href="https://www.businessinsider.com/swift-apple-ios-programming-language-uber-airbnb-square-2020-2" target="_blank" rel="noopener noreferrer">Everything you need to know about why developers love Swift, the Apple programming language that developers are using to build most new iPhone apps </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/microsoft-visual-studio-code-amazon-google-2019-10" target="_blank" rel="noopener noreferrer">Here’s why 8.5 million users love Visual Studio Code, the free software that’s helping Microsoft win over programmers in the cloud wars with Amazon </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/pytorch-facebook-tesla-uber-genentech-stanford-berkeley-2019-8" target="_blank" rel="noopener noreferrer">Everything you need to know about PyTorch, the world's fastest-growing AI project that started at Facebook and powers research at Tesla, Uber, and Genentech </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/tensorflow-google-ai-project-uber-nasa-twitter-2019-8" target="_blank" rel="noopener noreferrer">Everything you need to know about TensorFlow, Google’s own home-made AI software that’s now helping NASA discover planets and beating champions at Go </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/react-facebook-javascript-twitter-asana-pinterest-2019-6" target="_blank" rel="noopener noreferrer">Everything you need to know about React, a project started at Facebook that now helps Twitter, Pinterest, and Asana keep their apps looking good and working great </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/why-google-square-atlassian-using-kotlin-programming-language-2019-4" target="_blank" rel="noopener noreferrer">Here's why companies like Google, Square, and Atlassian are sprinting to use Kotlin, the fastest-growing programming language according to GitHub </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/ibm-google-microsoft-intel-quantum-computing-2019-3" target="_blank" rel="noopener noreferrer">Quantum computing could change everything, and IBM is racing with Microsoft, Intel, and Google to conquer it. Here's what you need to know </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/what-is-kubernetes-google-cloud-2019-1" target="_blank" rel="noopener noreferrer">Everything you need to know about Kubernetes, the Google-created open source software so popular even Microsoft and Amazon had to adopt it </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/what-is-ci-cd-software-development-2018-11" target="_blank" rel="noopener noreferrer">Investors are betting hundreds of millions of dollars that startups like PagerDuty, GitLab, and CloudBees can change the way software gets made </a> (Business Insider)</p>
        <p><a href="https://www.inverse.com/article/29218-do-sleep-apps-work" target="_blank" rel="noopener noreferrer">Are Sleep Apps Junk Science? Here's What Doctors Think</a> (Inverse)</p>

        <h3><u>Investigations</u></h3>
        <p><a href="https://www.businessinsider.com/lambda-school-coding-bootcamp-y-combinator-cult-2019-10" target="_blank" rel="noopener noreferrer">Lambda School is Silicon Valley's big bet on reinventing education and making student debt obsolete. But students say it's a 'cult' and they would have been better off learning on their own. </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/npm-employees-layoffs-resignations-unionization-nlrb-bogensberger-schlueter-voss-2019-6" target="_blank" rel="noopener noreferrer">NPM, a startup 11 million developers rely on, is tangled in a bitter cultural battle as it tries to actually make money </a> (Business Insider)</p>
        
        <h3><u>Profiles</u></h3>
        <p><a href="https://www.businessinsider.com/sifive-vp-chris-lattner-apple-tesla-google-2020-2" target="_blank" rel="noopener noreferrer">The former Apple engineer who created the programming language Swift has joined AI chip startup SiFive. Here's what he learned working at Apple, Tesla, and Google. </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/google-engineer-james-stout-voice-programmming-hands-free-coding-2019-10" target="_blank" rel="noopener noreferrer">A Google engineer had a rare health condition that made it excruciatingly painful to type. Here's how he saved his career by inventing a way to code with his voice and eyes. </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/pagerduty-ceo-jennifer-tejada-ipo-2019-4" target="_blank" rel="noopener noreferrer">The CEO behind the smash-hit PagerDuty IPO says that she looked at 51 other chief exec roles before she chose to lead the $3.9 billion company </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/lawyer-behind-mongodb-redis-labs-new-licenses-discusses-open-source-2019-3" target="_blank" rel="noopener noreferrer">Meet the programmer-turned-drummer-turned-lawyer who's helping open source startups stand their ground against Amazon's cloud amid a 'clash of ideologies' </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/google-aparna-sinha-kubernetes-interview-2019-3" target="_blank" rel="noopener noreferrer">The leader of one of Google's most important cloud businesses explains why it took her 14 years of convincing to join the company </a> (Business Insider)</p>

        <h3><u>Scoops</u></h3>
        <p><a href="https://www.businessinsider.com/thomas-kurian-google-cloud-sales-account-director-2019-9" target="_blank" rel="noopener noreferrer">Google Cloud has a new program to assign its best salespeople to go after the biggest customers — but Google employees say it makes it harder for current salespeople to advance </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/grace-hopper-celebration-palantir-sponsor-ice-changeorg-petition-2019-8" target="_blank" rel="noopener noreferrer">The Grace Hopper Celebration, the world's largest conference for women in tech, has dropped Palantir as a sponsor over its work with ICE </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/google-cloud-thomas-kurian-salespeople-compensation-oracle-sap-2019-8" target="_blank" rel="noopener noreferrer">Google Cloud has changed how it pays its salespeople, ripping a page out of the Oracle playbook</a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/npm-employees-open-letter-2019-5" target="_blank" rel="noopener noreferrer">Employees at NPM, a startup that provides a crucial service for 11 million software developers, have signed an open letter demanding better working conditions</a> (Business Insider)</p>

        <h3><u>Tech Culture</u></h3>
        <p><a href="https://www.businessinsider.com/white-hat-hackers-atlassian-hackerone-bugcrowd-2019-12" target="_blank" rel="noopener noreferrer">Here's what it's like to work as a white hat hacker who legally hacks into companies like Uber, Starbucks, and Atlassian</a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/how-tech-companies-like-atlassian-microsoft-do-developer-interviews-2019-5" target="_blank" rel="noopener noreferrer">Here's how tech companies like Atlassian, Microsoft, and Red Hat are revamping their interview process for developers today </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/red-hat-employees-get-tattoos-of-new-logo-ahead-of-acquisition-by-ibm-2019-4" target="_blank" rel="noopener noreferrer">Red Hat is getting a new logo ahead of its acquisition by IBM, and six employees have already gotten tattoos of it </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/women-running-for-the-open-source-initiative-face-online-harassment-2019-3" target="_blank" rel="noopener noreferrer">A group of women trying to change the sexist culture of open source software have been harassed online </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/emsisoft-ceo-new-zealand-farm-2019-1" target="_blank" rel="noopener noreferrer">This is what a workday looks like for a CEO who runs his entire 40-employee tech company from a farm in New Zealand </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/gitlab-zapier-remote-emsisoft-invision-workforce-2019-1" target="_blank" rel="noopener noreferrer">Startups are betting that letting people work from home, an RV, or a New Zealand mountaintop will lure top talent away from Silicon Valley </a> (Business Insider)</p>
        <p><a href="https://www.inverse.com/article/28542-aol-chatrooms-2017" target="_blank" rel="noopener noreferrer">Gardening, Sex, and Trolling: Who's in AOL Chatrooms in 2017</a> (Inverse)</p>

        <h3><u>Open Source Software</u></h3>
        <p><a href="https://www.businessinsider.com/open-source-companies-recession-coronavirus-2020-3" target="_blank" rel="noopener noreferrer">Here's why open source software startups often get stronger in downturns and recessions, according to executives who navigated the Great Recession </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/open-source-activism-ice-protests-open-source-initiative-2019-11" target="_blank" rel="noopener noreferrer">Software freedom vs human freedom: A surge of activism is rocking open source developers, as programmers fight to stop their software from being used for 'evil' </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/aws-open-source-chef-yugabyte-cloudera-2019-8" target="_blank" rel="noopener noreferrer">Despite the looming threat of Amazon's cloud, some software companies are going all in on free software. Others are fighting back. </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/why-investors-throwing-money-at-open-source-startups-2019-2" target="_blank" rel="noopener noreferrer">Here's why investors are throwing money at startups that give away their software for free </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/amazon-web-services-open-source-licensing-undermine-2018-12" target="_blank" rel="noopener noreferrer">Startups are taking on Amazon's cloud with a controversial new plan, but experts warn it could undermine the foundations of open source </a> (Business Insider)</p>
        <p><a href="https://www.businessinsider.com/mongodb-and-redis-labs-have-a-new-plan-to-take-on-amazon-2018-10" target="_blank" rel="noopener noreferrer">Two software companies, fed up with Amazon, Alibaba and other big cloud players, have a controversial new plan to fight back </a> (Business Insider)</p>

        
        <h3><u><a href="http://blog.undergradresearch.northwestern.edu/blog/rosalie/" target="_blank" rel="noopener noreferrer">Hakka Youth Cultural Identity in Taiwan</a></u></h3>
        <p><a href="http://narrative.ly/super-subcultures/how-to-save-an-ancient-language-before-it-disappears-forever/" target="_blank" rel="noopener noreferrer">How To Save An Ancient Language Before It Disappears Forever</a> (Narratively)</p>
        <p><a href="http://www.taipeitimes.com/News/feat/archives/2016/01/25/2003637997" target="_blank" rel="noopener noreferrer">Demographic shift spells language decline</a> (Taipei Times)</p>
        <p><a href="http://www.chinapost.com.tw/taiwan/national/national-news/2016/02/16/458442/Youth-find.htm" target="_blank" rel="noopener noreferrer">Youth find ways to reclaim Hakka identity</a> (China Post)</p>
        
      <h3><u>Race and Culture</u></h3>
      <p><a href="https://psmag.com/social-justice/activists-in-oakland-are-pushing-for-better-research-around-police-violence-and-community-trauma"   >Activists in Oakland Are Pushing For Better Research Around Police Violence and Community Trauma</a> (The Pacific Standard)</p>
      <p><a href="https://www.teenvogue.com/story/the-chinese-exclusion-act-explained" target="_blank" rel="noopener noreferrer">The Chinese Exclusion Act, Explained</a> (Teen Vogue)</p>
      <p><a href="http://www.chicagomag.com/city-life/January-2018/St-Therese-Chinatown/" target="_blank" rel="noopener noreferrer">The Midwest's Only Chinese Catholic Church Weathers Its 70th Year</a> (Chicago Mag)</p>
      <p><a href="https://www.huffingtonpost.com/entry/mental-health-stigma-asian-americans_us_59d4f739e4b0218923e6e8fd?5yb" target="_blank" rel="noopener noreferrer">A New Generation Of Therapists Is Fighting Asian-American Mental Health Stigma</a> (The Huffington Post)</p>
      <p><a href="https://tonic.vice.com/en_us/article/xwgg4d/asian-americans-are-undergoing-a-silent-mental-health-crisis" target="_blank" rel="noopener noreferrer">Asian Americans Are Undergoing a Silent Mental Health Crisis</a> (Tonic)</p>
      <p><a href="http://time.com/4408900/latina-women-business-owner-entrepreneur/" target="_blank" rel="noopener noreferrer">Why More Women of Color Than Ever Are Starting Their Own Businesses</a> (TIME)</p>
      <p><a href="http://time.com/4404229/black-lives-matter-letter-alton-sterling-philando-castile/" target="_blank" rel="noopener noreferrer">How a Group of Asian-Americans Is Spreading Support for Black Lives Matter</a> (TIME)</p>
       
       <h3><u>Environment</u></h3>
       <p><a href="https://tonic.vice.com/en_us/article/59pmvn/this-is-life-in-one-of-americas-most-polluted-housing-projects" target="_blank" rel="noopener noreferrer">The 40-Year Fight to Clean Up One of America’s Most Polluted Projects</a> (Tonic)</p>
        <p><a href="https://www.teenvogue.com/story/teens-are-suing-the-us-government-over-climate-change" target="_blank" rel="noopener noreferrer">Teens are Suing the U.S. Government Over Climate Change</a> (Teen Vogue)</p>
        <p><a href="https://www.teenvogue.com/story/young-adults-are-fighting-to-stop-the-line-3-pipeline-in-minnesota" target="_blank" rel="noopener noreferrer">Young Adults Are Fighting to Stop the Line 3 Pipeline in Minnesota</a> (Teen Vogue)</p>
                        
        <h3><u>Essays</u></h3>
        <p><a href="http://www.racked.com/2017/4/9/15022012/qipao-traditional-chinese-new-year" target="_blank" rel="noopener noreferrer">My Complicated Relationship With a Traditional Chinese Garment</a> (Racked)</p>
        <p><a href="https://www.inverse.com/article/29223-asian-countries-chat-apps" target="_blank" rel="noopener noreferrer">What Makes These Chat Apps Popular in Certain Asian Countries</a> (Inverse)</p>
        <p><a href="http://www.skindeepmag.com/online-articles/no-hyphen/" target="_blank" rel="noopener noreferrer">No-hyphen</a> (Skin Deep)</p>
        </div>
  </Layout>
)
