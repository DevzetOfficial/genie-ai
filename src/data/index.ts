import {
  AiDrivenProp,
  BlogProp,
  CompareToCallProp,
  ComparisonDataProp,
  SalesDriveProp,
  WorkforceRevulationProp,
} from "@/types";
import inteligenceOne from "@/assets/intelligence/intelligence-1.webp";
import inteligenceTwo from "@/assets/intelligence/intelligence-2.webp";
import inteligenceThree from "@/assets/intelligence/intelligence-3.webp";
import inteligenceFour from "@/assets/intelligence/intelligence-4.webp";
import inteligenceFive from "@/assets/intelligence/intelligence-5.jpg";
import inteligenceSix from "@/assets/intelligence/intelligence-6.webp";
import profile from "@/assets/profile.png";
import aiSdrSalesImgOne from "@/assets/ai-sdr/sale-drive-1.webp";
import aiSdrSalesImgTwo from "@/assets/ai-sdr/sale-drive-2.webp";
import aiSdrSalesImgThree from "@/assets/ai-sdr/sale-drive-3.webp";
import aiSdrSalesImgFour from "@/assets/ai-sdr/sale-drive-3.webp";
import aiPhoneSaleDriveOne from "@/assets/ai-phone-representative/sales-drive-1.webp";
import aiPhoneSaleDriveTwo from "@/assets/ai-phone-representative/sales-drive-2.webp";
import aiPhoneSaleDriveThree from "@/assets/ai-phone-representative/sales-drive-3.webp";
import aiPhoneSaleDriveFour from "@/assets/ai-phone-representative/sales-drive-4.webp";

import sonyasImg from "@/assets/sonya.webp";
import franksImg from "@/assets/frank.webp";

export const inteligences = [
  {
    id: 1,
    img: inteligenceOne,
    title: "24/7 Sales Engagement",
    shortDesc: `Reach, qualify, and engage leads round-the-clock with zero downtime.`,
  },
  {
    id: 2,
    img: inteligenceTwo,
    title: "Hyper-Personalized Outreach",
    shortDesc: `Deliver tailored messages that resonate, driving higher conversions effortlessly.`,
  },
  {
    id: 3,
    img: inteligenceThree,
    title: "Seamless Multi-Channel Integration",
    shortDesc: `Engage leads via email, LinkedIn, and calls—all in one unified platform.`,
  },
  {
    id: 4,
    img: inteligenceFour,
    title: "Automated Scheduling",
    shortDesc: `Book meetings and sync calendars without lifting a finger.`,
  },
  {
    id: 5,
    img: inteligenceFive,
    title: "Real-Time Insights",
    shortDesc: `Track lead interest and prioritize hot opportunities with precision.`,
  },
  {
    id: 6,
    img: inteligenceSix,
    title: "Global Reach, Local Impact",
    shortDesc: `Operate across time zones and languages, connecting with leads wherever they are.`,
  },
];

export const homeTestimonials = [
  {
    id: 1,
    review:
      "Genie transformed our sales process. With adaptive AI and seamless automation, we’ve achieved unmatched efficiency and lead conversion. Truly game-changing!",
    profileImg: profile,
    reviewerName: "Sriram",
    designation: " CEO, hrtech.sg",
    bgColor: "#EECBBD",
  },
  {
    id: 2,
    review:
      "Genie Platforms streamlined our sales efforts, enabling us to reach global clients with hyper-personalized outreach like never before.",
    profileImg: profile,
    reviewerName: "Ashish",
    designation: "CRO, Nityo Infotech",
    bgColor: "#DAE6E3",
  },

  {
    id: 3,
    review:
      "Thanks to Genie Platforms, we connected with thousands of potential learners worldwide, increasing enrollment rates exponentially.",
    profileImg: profile,
    reviewerName: "Robert",
    designation: "Head of Marketing & Operations",
    bgColor: "#B6BBDC",
  },
  {
    id: 4,
    review:
      "Genie Platforms transformed our marketing strategy, helping us engage educators and students with precision and scale.",
    profileImg: profile,
    reviewerName: "Sanjeev",
    designation: "CEO, TeachingKrow",
    bgColor: "#B6BBDC",
  },
];

export const aiSdrTestimonials = [
  {
    id: 1,
    review:
      "Genie transformed our sales process. With adaptive AI and seamless automation, we’ve achieved unmatched efficiency and lead conversion. Truly game-changing!",
    profileImg: profile,
    reviewerName: "Sriram",
    designation: " CEO, hrtech.sg",
    bgColor: "#EECBBD",
  },
  {
    id: 2,
    review:
      "Genie Platforms streamlined our sales efforts, enabling us to reach global clients with hyper-personalized outreach like never before.",
    profileImg: profile,
    reviewerName: "Ashish",
    designation: "CRO, Nityo Infotech",
    bgColor: "#DAE6E3",
  },

  {
    id: 3,
    review:
      "Thanks to Genie Platforms, we connected with thousands of potential learners worldwide, increasing enrollment rates exponentially.",
    profileImg: profile,
    reviewerName: "Robert",
    designation: "Head of Marketing & Operations",
    bgColor: "#B6BBDC",
  },
  {
    id: 4,
    review:
      "Genie Platforms transformed our marketing strategy, helping us engage educators and students with precision and scale.",
    profileImg: profile,
    reviewerName: "Sanjeev",
    designation: "CEO, TeachingKrow",
    bgColor: "#B6BBDC",
  },
];

export const aiPhoneRepresentativeTestimonials = [
  {
    id: 1,
    review:
      "Genie transformed our sales process. With adaptive AI and seamless automation, we’ve achieved unmatched efficiency and lead conversion. Truly game-changing!",
    profileImg: profile,
    reviewerName: "Sriram",
    designation: " CEO, hrtech.sg",
    bgColor: "#EECBBD",
  },
  {
    id: 2,
    review:
      "Genie Platforms streamlined our sales efforts, enabling us to reach global clients with hyper-personalized outreach like never before.",
    profileImg: profile,
    reviewerName: "Ashish",
    designation: "CRO, Nityo Infotech",
    bgColor: "#DAE6E3",
  },

  {
    id: 3,
    review:
      "Thanks to Genie Platforms, we connected with thousands of potential learners worldwide, increasing enrollment rates exponentially.",
    profileImg: profile,
    reviewerName: "Robert",
    designation: "Head of Marketing & Operations",
    bgColor: "#B6BBDC",
  },
  {
    id: 4,
    review:
      "Genie Platforms transformed our marketing strategy, helping us engage educators and students with precision and scale.",
    profileImg: profile,
    reviewerName: "Sanjeev",
    designation: "CEO, TeachingKrow",
    bgColor: "#B6BBDC",
  },
];

export const homeFaq = [
  {
    id: 1,
    question: "What makes Genie different from other Al tools on the market?",
    answer:
      "Genie is a comprehensive Al suite that combines sales, marketing, customer support, and operational efficiency in one platform, optimized for measurable business growth. Its adaptive intelligence goes beyond automation, actively learning and enhancing processes based on real-time data.",
  },
  {
    id: 2,
    question:
      "Will Genie replace my existing sales and customer service teams?",
    answer:
      "No, Genie is designed to empower your teams, not replace them. It automates repetitive tasks and provides insights to help your team focus on strategic and customer-centric activities.",
  },
  {
    id: 3,
    question: "Can Genie scale as my business grows?",
    answer:
      "Absolutely. Genie is built to adapt to businesses of all sizes, offering flexible configurations that grow with your needs, ensuring scalability without compromising performance.",
  },
  {
    id: 4,
    question: "Does Genie support multiple languages and global operations?",
    answer:
      "Yes, Genie is equipped with multilingual capabilities and supports global operations, making it a reliable tool for businesses with an international presence.",
  },
  {
    id: 5,
    question: "Can I control which tasks Genie automates?",
    answer: "Need content of this question",
  },
  {
    id: 6,
    question: "How quickly can Genie be integrated into my existing systems?",
    answer: "Need content of this question",
  },
  {
    id: 7,
    question: "How does Genie ensure data security and compliance?",
    answer: "Need content of this question",
  },
  {
    id: 8,
    question: "What kind of ROl can I expect from using Genie?",
    answer: "Need content of this question",
  },
  {
    id: 9,
    question: "How does Genie adapt to my business's specific needs?",
    answer: "Need content of this question",
  },
  {
    id: 10,
    question: "What support and training do you provide for Genie users?",
    answer: "Need content of this question",
  },
];

export const aiSdrFaq = [
  {
    id: 1,
    question:
      "What makes Genie AI SDR different from other sales automation tools?",
    answer:
      "Genie is more than a typical sales automation tool—it’s a fully autonomous, AI-driven SDR that doesn’t just automate tasks but actively engages, qualifies, and nurtures leads. With advanced hyper-personalization, multi-channel engagement, and continuous operation, Genie transforms sales development from routine outreach to strategic, high-conversion engagement",
  },
  {
    id: 2,
    question: "Does Genie replace my existing sales team?",
    answer: "Need content",
  },
  {
    id: 3,
    question: "Can Genie work across multiple channels simultaneously?",
    answer: "Need content",
  },
  {
    id: 4,
    question: "What kind of ROI can I expect with Genie?",
    answer: "Need content",
  },
  {
    id: 5,
    question: "How does Genie ensure my outreach doesn’t end up in spam?",
    answer: "Need content",
  },
  {
    id: 6,
    question:
      "How quickly can Genie be integrated with my current sales tools?",
    answer: "Need content",
  },
  {
    id: 7,
    question: "How does Genie personalize outreach at scale?",
    answer: "Need content",
  },
  {
    id: 8,
    question:
      "Is Genie suitable for startups and small teams, or just large enterprises?",
    answer: "Need content",
  },
  {
    id: 9,
    question: "How does Genie help identify and prioritize hot leads?",
    answer: "Need content",
  },
  {
    id: 10,
    question:
      "What support is provided to help my team get started with Genie?",
    answer: "Need content",
  },
];

export const blogs: BlogProp[] = [
  {
    id: 1,
    title: "How to build a loyal community online and offline",
    category: ["Tech"],
    description:
      "The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3000 troops to Russia, a move that could mark a significant escalation in Russia's war against its neighbor.",
    author: "Harris Lang",
    authorImg: "harris.png",
    publishDate: "Oct 20, 2024",
    time: "2 hours ago",

    readingTime: "10 min read",
    coverImage: "blog-1.webp",
    type: "featured",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <b><p> Therefore, a dangerous action does not necessarily mean deleting somethin</b>g. </p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 2,
    title: "The 8 best European cities to visit right now",
    category: ["Travel"],
    description:
      "The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3000 troops to Russia, a move that could mark a significant escalation in Russia's war against its neighbor.",
    author: "Harris Lang",
    authorImg: "harris.png",
    time: "2 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "10 min read",
    coverImage: "blog-2.webp",
    type: "featured",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 3,
    title: "How a visual artist redefines success in graphic design",
    category: ["Design", "World"],
    description:
      "The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3000 troops to Russia, a move that could mark a significant escalation in Russia's war against its neighbor.",
    author: "Harris Lang",
    authorImg: "harris.png",
    time: "2 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "7 min read",
    coverImage: "blog-3.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 4,
    title: "How to optimize images in WordPress for faster loading",
    category: ["Tech", "Web Development"],
    description:
      "The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3000 troops to Russia, a move that could mark a significant escalation in Russia's war against its neighbor.",
    author: "Harris Lang",
    authorImg: "harris.png",
    time: "3 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "6 min read",
    coverImage: "blog-4.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 5,
    title: "How does writing influence your personal brand?",
    category: ["Design", "Writing", "Personal Branding"],
    description:
      "The United States said for the first time on Wednesday that it had seen evidence that North Korea has sent 3000 troops to Russia, a move that could mark a significant escalation in Russia's war against its neighbor.",
    author: "Harris Lang",
    authorImg: "harris.png",
    time: "4 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "5 min read",
    coverImage: "blog-5.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 6,
    title: "Lessons and insights from 8 years of Pixglade",
    category: ["Tech", "Innovation"],
    description:
      "Explore how Pixglade has evolved over the years, offering groundbreaking solutions for creative professionals worldwide.",
    author: "Jane Doe",
    authorImg: "harris.png",
    time: "1 hour ago",
    publishDate: "Oct 20, 2024",
    readingTime: "8 min read",
    coverImage: "blog-6.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 7,
    title: "The definitive guide to setting up your business",
    category: ["Business", "Entrepreneurship"],
    description:
      "Learn the key steps and strategies for starting your own business and scaling it for success.",
    author: "John Smith",
    authorImg: "harris.png",
    time: "5 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "12 min read",
    coverImage: "blog-7.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 8,
    title: "The world's most breathtaking places to visit in 2024",
    category: ["Travel", "Adventure"],
    description:
      "Discover the must-visit destinations for 2024 that will take your breath away and inspire your wanderlust.",
    author: "Sarah Johnson",
    authorImg: "harris.png",
    time: "1 day ago",
    publishDate: "Oct 20, 2024",
    readingTime: "15 min read",
    coverImage: "blog-8.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 7,
    title: "Lorem impsum testing title",
    category: ["Tech", "Innovation"],
    description:
      "Explore how Pixglade has evolved over the years, offering groundbreaking solutions for creative professionals worldwide.",
    author: "Jane Doe",
    authorImg: "harris.png",
    time: "1 hour ago",
    publishDate: "Oct 20, 2024",
    readingTime: "8 min read",
    coverImage: "blog-6.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 8,
    title: "Lorem impsum testing title",
    category: ["Business", "Entrepreneurship"],
    description:
      "Learn the key steps and strategies for starting your own business and scaling it for success.",
    author: "John Smith",
    authorImg: "harris.png",
    time: "5 hours ago",
    publishDate: "Oct 20, 2024",
    readingTime: "12 min read",
    coverImage: "blog-7.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
  {
    id: 9,
    title: "Lorem impsum testing title",
    category: ["Travel", "Adventure"],
    description:
      "Discover the must-visit destinations for 2024 that will take your breath away and inspire your wanderlust.",
    author: "Sarah Johnson",
    authorImg: "harris.png",
    time: "1 day ago",
    publishDate: "Oct 20, 2024",
    readingTime: "15 min read",
    coverImage: "blog-8.webp",
    type: "top-story",
    longDesc: `<p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> <blockquote> “Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.” </blockquote>
    <p> By definition, an interface is a layer between the user and a system, serving the purpose of communication between them. Interacting with the interface usually requires users to perform certain actions. </p> <p> Different actions can lead to various outcomes, some of which might be critical. </p> <p> While we often need to provide additional protection in case users attempt to perform dangerous or irreversible actions, it’s good to remember that one of the <a href="#">ten usability heuristics</a> called "Error Prevention" says: </p> 
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <p><b> Therefore, a dangerous action does not necessarily mean deleting something. </b></p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
  },
];

export const PhoneRepresentativeSalesDrive: SalesDriveProp = {
  title: "Here’s How Frank Accelerates Your Success:",
  items: [
    {
      id: 1,
      title: "1. Effortless Calling with AI Parallel Dialer",
      details:
        "Skip the hassle of answering machines and endless ringing. Automatically logs calls, leaves voicemails, and takes notes while you concentrate on selling. Delivers best-in-class audio quality with the fastest connections.",
      image: aiPhoneSaleDriveOne,
    },
    {
      id: 2,
      title: "2. More Conversations, Less Work",
      details:
        "Increase connect rates with built-in spam detection and voice integrity. Finds accurate phone numbers, dials automatically, and even cleans your call list as you go. Enables more human-to-human conversations that lead to a bigger, healthier pipeline.",
      image: aiPhoneSaleDriveTwo,
    },
    {
      id: 3,
      title: "3. Be the Expert on Every Call",
      details:
        "Hours of pre-call research delivered in seconds, empowering you with critical insights. Frank isn’t just a dialer; it’s your copilot, ensuring you’re prepared for every conversation.",
      image: aiPhoneSaleDriveThree,
    },
    {
      id: 4,
      title: "4. Virtual Salesfloor",
      details:
        "Live coaching and real-time collaboration on calls to boost team performance. Managers can provide feedback in the moment, shortening ramp time and increasing conversions",
      image: aiPhoneSaleDriveFour,
    },
  ],
};

export const aiSalesDrive: SalesDriveProp = {
  title: "How Sonya Drives Your Sales",
  items: [
    {
      id: 1,
      title: "1. Find Your Ideal Buyers ",
      details:
        "With Genie, create an Ideal Customer Profile and reach high-value buyers globally. Genie connects with potential leads across industries, pinpointing those who match your target profile and positioning your brand to make the best impression.",
      image: aiSdrSalesImgOne,
    },
    {
      id: 2,
      title: "2. Unified Multi-Channel Engagement",
      details:
        "Engage consistently through email, Linkedin, and other platforms, ensuring a unified approach to every prospect. Genie automates follow-ups, keeping leads warm and engaged across channels without extra manual input.",
      image: aiSdrSalesImgTwo,
    },
    {
      id: 3,
      title: "3. Hyper-Personalization at Scale",
      details:
        "Genie's Al-driven insights allow for targeted outreach with precision that goes beyond human capabilities. Each email and message is customized based on the prospect's role, industry, and specific pain points, resulting in higher engagement and conversion rates.",
      image: aiSdrSalesImgThree,
    },
    {
      id: 4,
      title: "4. Always-On Functionality",
      details:
        "Operate your sales function 24/7 with Genie's autonomous capabilities. Genie SDR runs continuously, engaging leads, qualifying interest, and setting up appointments while your team focuses on strategic growth initiatives.",
      image: aiSdrSalesImgFour,
    },
  ],
};

export const aiDrivenData: AiDrivenProp[] = [
  {
    id: 1,
    title: "Book More Meetings with Al",
    features: [
      "Respond in 10 Minutes or Less: Engage leads in real time.",
      "Manage Responses: Handle auto-replies, negative responses, and follow-ups.",
    ],
  },
  {
    id: 2,
    title: "Run Event Communications",
    features: [
      "Personalized Invites: Engage prospects with tailored event messages.",
      "Efficient Follow-Ups: Reconnect with attendees to boost engagement.",
    ],
  },
  {
    id: 3,
    title: "Generate Leads from Our Extensive  Database",
    features: [
      "Enrich Data: Add value to existing leads with additional data points.",
      "ABM Outreach: Target specific accounts for a focused approach.",
    ],
  },
  {
    id: 4,
    title: "Manage Your Sales Pipeline",
    features: [
      "Automated Scheduling: Sync with Calendly or HubSpot to streamline meetings.",
      "Re-Engagement Campaigns: Keep your pipeline active and moving.",
    ],
  },
  {
    id: 5,
    title: "Empower Sales Engagement",
    features: [
      "Upsell and Cross-Sell: Increase lifetime value through targeted offers.",
      "Stay Top of Mind: Use multi-channel outreach to keep users engaged.",
    ],
  },
];

export const compareToCallData: CompareToCallProp[] = [
  {
    id: 1,
    withGenie: false,
    items: [
      "Time-Consuming, Manual Prospecting",
      "Missed Engagement Opportunities",
      "Generic Messaging",
      "Disjointed Sales Stack Requiring Multiple Tools",
    ],
  },
  {
    id: 2,
    withGenie: true,
    items: [
      "Automated Lead Generation And Qualification",
      "Consistent Multi-Channel Outreach",
      "Hyper-Personalized Interactions At Scale",
      "Simplified Sales Stack, With Genie As The Core",
    ],
  },
];

export const agentData = [
  {
    id: 1,
    name: "Sonya",
    agentImg: sonyasImg,
    designation: "Al SDR",
    about: `Sonya AI SDR revolutionizes sales with 24/7 automated lead engagement, hyper-personalized outreach, and scalable efficiency—boosting conversions effortlessly.`,
    route: "/ai-sdr",
  },
  {
    id: 2,
    name: "Frank",
    agentImg: franksImg,
    designation: "Al Phone Representative",
    about: `Frank AI Phone Representative automates customer interactions with 24/7 intelligent call handling, seamless routing, and hyper-personalized support—boosting efficiency and satisfaction.`,
    route: "/ai-phone-representative",
  },
];

export const workforceRevolutionData: WorkforceRevulationProp[] = [
  {
    id: 1,
    title: "Increased Efficiency",
    description:
      "Genie handles tasks at unmatched speeds without compromising on quality.",
  },
  {
    id: 2,
    title: "Reliable Quality",
    description:
      "AI-driven processes maintain high accuracy, essential for data-centric industries.",
  },
  {
    id: 3,
    title: "Employee Satisfaction",
    description:
      "By taking on repetitive tasks, Genie allows employees to focus on fulfilling, strategic work.",
  },
  {
    id: 4,
    title: "Flexibility and Adaptability",
    description:
      "Genie scales with your business, adapting to workload fluctuations and new tasks.",
  },
];

export const homePageComparisonData: ComparisonDataProp = {
  title: "Genie AI Agents VS <br/> Other Generic AI Platforms",
  items: [
    {
      id: 1,
      category: "",
      genieFeature: "GenieAI",
      otherAIFeature: "Other AI",
    },
    {
      id: 2,
      category: "Sales Impact",
      genieFeature:
        "Engages, qualifies, and nurtures leads, freeing up sales teams to focus on conversions.",
      otherAIFeature:
        "Basic lead capture without advanced qualification or nurturing.",
    },
    {
      id: 3,
      category: "Marketing Precision",
      genieFeature:
        "Combines Business Intelligence with adaptive, real-time campaign optimization.",
      otherAIFeature: "Limited automation, lacks real-time adaptation.",
    },
    {
      id: 4,
      category: "Growth Focus",
      genieFeature:
        "Streamlines pipelines and enhances customer satisfaction, driving sustainable growth.",
      otherAIFeature:
        "Primarily enhances productivity but lacks a growth-oriented strategy.",
    },
    {
      id: 5,
      category: "Management Efficiency",
      genieFeature:
        "Automates across departments, reducing management workload and allowing teams to focus on high-impact tasks.",
      otherAIFeature:
        "Single-purpose tools that require manual coordination across systems.",
    },
    {
      id: 6,
      category: "Data Security",
      genieFeature:
        "Industry-standard encryption and compliance, ensuring customer and business data remain secure",
      otherAIFeature:
        "May lack comprehensive security measures and compliance standards.",
    },
    {
      id: 7,
      category: "Scalability",
      genieFeature:
        "Grows with your business—handles increasing volume without sacrificing performance or quality.",
      otherAIFeature:
        "Often requires additional resources or customization to scale effectively",
    },
    {
      id: 8,
      category: "ROI Tracking",
      genieFeature:
        "Built-in analytics for clear insights on AI-driven performance and ROI across all functions",
      otherAIFeature:
        "Limited insights into performance metrics and ROI tracking, often requires third-party tools",
    },
  ],
};

export const aiPhonePageComparisonData: ComparisonDataProp = {
  title: "How Frank Compares to Traditional SDR Teams",
  description:
    "Frank empowers sales teams to focus on meaningful conversations and pipeline growth while eliminating manual busywork, offering a scalable, efficient, and consistent solution for modern prospecting.",
  items: [
    {
      id: 1,
      category: "",
      genieFeature: "Frank - AI Dialing Assistant",
      otherAIFeature: "Traditional SDR Teams",
    },
    {
      id: 2,
      category: "Cost Efficiency",
      genieFeature:
        "Automates dialing, voicemail drops, note-taking, and list management, reducing overhead and maximizing productivity.",
      otherAIFeature:
        "Requires extensive staffing, with added costs for training, coaching, and manual processes.",
    },
    {
      id: 3,
      category: "Anytime Availability",
      genieFeature:
        "Can operate in any timezone, allowing prospecting to happen round-the-clock, even outside of business hours.",
      otherAIFeature:
        "Limited to working hours, with no activity after hours unless additional staff is hired.",
    },
    {
      id: 4,
      category: "Consistency In Quality",
      genieFeature:
        "Provides consistent performance using AI-driven processes, ensuring uniform outreach and follow-ups.",
      otherAIFeature:
        " Quality depends on individual SDRs’ experience, energy levels, and adherence to processes.",
    },
    {
      id: 5,
      category: "Personalization Capabilities",
      genieFeature:
        "Leverages CRM data and AI to tailor every interaction based on a prospect's role, industry, and pain points.",
      otherAIFeature:
        " Personalization relies on manual research and memory, leading to variability in outreach quality.",
    },
    {
      id: 6,
      category: "Call Routing & Escalation",
      genieFeature:
        "Seamlessly identifies qualified prospects and hands them off to Account Executives with full context and insights.",
      otherAIFeature:
        "Transfers may lack context, requiring AEs to requalify leads and potentially frustrating prospects.",
    },
    {
      id: 7,
      category: "Call Efficiency",
      genieFeature:
        "Skips answering machines, automates voicemail drops, and speeds up dialing, maximizing live connections.",
      otherAIFeature:
        "SDRs spend significant time manually dialing, leaving voicemails, and navigating unproductive calls.",
    },
    {
      id: 8,
      category: "Multi-Language Support",
      genieFeature:
        "Handles outreach in multiple languages using AI capabilities, enabling global prospecting.",
      otherAIFeature:
        "Limited to the linguistic capabilities of individual SDRs, restricting international reach.",
    },
    {
      id: 9,
      category: "Scalability",
      genieFeature:
        "Easily scales to handle increased call volumes without additional headcount or training.",
      otherAIFeature:
        "Scalability depends on hiring, onboarding, and training new SDRs, which can take months.",
    },
  ],
};

export const aiWorkerPageComparisonData: ComparisonDataProp = {
  title: "Mark - Geneie AI Workers Vs. Traditional BPO And Straffing Models",
  items: [
    {
      id: 1,
      category: "",
      genieFeature: "Mark - GenieAI",
      otherAIFeature: "Traditional BPO And Staffing Models",
    },
    {
      id: 2,
      category: "Opertional Hours",
      genieFeature: "Operates continuously, 24/7",
      otherAIFeature: "Limited to buisiness hours",
    },
    {
      id: 3,
      category: "Consistency And Accuracy",
      genieFeature: "Delivers uniform, error-free performance every time,",
      otherAIFeature: "Ensuring data integrity & compliance",
    },
    {
      id: 4,
      category: "Scalability",
      genieFeature: "Scales effortlessly without any Onboarding Costs",
      otherAIFeature: "Hiring or BPO partnerships require time & resources",
    },
    {
      id: 5,
      category: "Cost Efficiency",
      genieFeature: "Minimizes costs by authmating repetitive tasks",
      otherAIFeature: "Costs Increase Linearly WIth Workforce Size",
    },
    {
      id: 6,
      category: "Compliance Support",
      genieFeature: "Built-in regulatory adherence",
      otherAIFeature: "Compliance depends on training",
    },
  ],
};
