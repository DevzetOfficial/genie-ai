import {
  AiDrivenProp,
  BlogProp,
  CompareToCallProp,
  ComparisonDataProp,
  SalesDriveProp,
  WorkforceRevulationProp,
} from "@/types";
import profile from "@/assets/profile.png";
import testimonialBrandLogo from "@/assets/testimonial-brand.png";
import testimonialBrandLogoTwo from "@/assets/testimonial-brand2.png";
import salesDriveImageOne from "@/assets/sales-driveone.webp";
import salesDriveImageTwo from "@/assets/sales-drivetwo.webp";
import salesDriveImageFour from "@/assets/sales-drivefour.webp";
import salesDriveImageThree from "@/assets/sales-drivethree.webp";
import agentOne from "@/assets/agent-one.png";
import agentTwo from "@/assets/agent-two.png";
import agentThree from "@/assets/agent-three.png";

export const testimonials = [
  {
    id: 1,
    logo: false,
    review:
      "AI SDRs automate repetitive tasks, freeing up sales teams to focus",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#EECBBD",
  },
  {
    id: 2,
    logo: true,
    testimonialLogo: testimonialBrandLogo,
    bgColor: "#E1DAE6",
  },
  {
    id: 3,
    logo: false,
    review:
      "“AI SDRs automate repetitive tasks, freeing up sales teams to focus on high-value activities, boosting overall productivity.”",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#DAE6E3",
  },

  {
    id: 4,
    logo: true,
    testimonialLogo: testimonialBrandLogoTwo,
    bgColor: "#B6DCDC",
  },
  {
    id: 5,
    logo: false,
    review:
      "I SDRs automate repetitive tasks, freeing up sales teams to focus on high-value activities, boosting overall productivity.",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#B6BBDC",
  },
  {
    id: 6,
    logo: false,
    review:
      "AI SDRs automate repetitive tasks, freeing up sales teams to focus",
    profileImg: profile,
    reviewerName: "Jenny Wilson",
    designation: "IBM",
    bgColor: "#E7BCD6",
  },
];

export const genieFAQ = [
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
    answer:
      "Yes, Genie gives you full control over automation settings, allowing you to choose which tasks to automate while keeping oversight on crucial processes.",
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
    <h2>What Is A Dangerous Action?</h2> <p> Surprisingly, when we talk about dangerous actions, it doesn’t necessarily mean that something is being deleted. </p> <p> Here’s an example of a dangerous action from the banking application use: </p> <figure> <img src="http://localhost:5173/src/assets/blog-1.webp" alt="A screenshot from a bank application showing loan details."> <figcaption>A screenshot from the bank application showing a loan.</figcaption> </figure> <p> The bank approved a loan for me, and as soon as I clicked “Get Money,” it meant that I had signed the necessary documents and accepted the loan. All I have to do is tap the yellow button, and I’ll get the money. </p> <p> As a result of an accidental tap, you might end up taking a loan when you didn’t intend to, which is why this action can be considered significant and dangerous. </p> <b><p> Therefore, a dangerous action does not necessarily mean deleting somethin</b>g. </p> <p> Some examples may include the following: </p> <ul> <li>Sending an email</li> <li>Placing an order</li> <li>Publishing a post</li> <li>Making a bank transaction</li> <li>Signing a legal document</li> <li>Granting or blocking a user</li> <li>Granting or revoking permissions</li> </ul>`,
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
  title: "How Genie Drives Your Sales",
  items: [
    {
      id: 1,
      title: "1. Instant Responses That Keep Customers Engaged",
      details:
        "With Genie, create an Ideal Customer Profile and reach high-value buyers globally. Genie connects with potential leads across industries, pinpointing those who match your target profile and positioning your brand to make the best impression.",
      image: salesDriveImageOne,
    },
    {
      id: 2,
      title: "2. Personalized, Data-Driven Interactions",
      details:
        "Engage consistently through email, Linkedin, and other platforms, ensuring a unified approach to every prospect. Genie automates follow-ups, keeping leads warm and engaged across channels without extra manual input.",
      image: salesDriveImageTwo,
    },
    {
      id: 3,
      title: "3. Real-Time Call Routing and Escalation",
      details:
        "Genie's Al-driven insights allow for targeted outreach with precision that goes beyond human capabilities. Each email and message is customized based on the prospect's role, industry, and specific pain points, resulting in higher engagement and conversion rates.",
      image: salesDriveImageThree,
    },
    {
      id: 4,
      title: "4. Multi-Language Capabilities for Global Reach",
      details:
        "Operate your sales function 24/7 with Genie's autonomous capabilities. Genie SDR runs continuously, engaging leads, qualifying interest, and setting up appointments while your team focuses on strategic growth initiatives.",
      image: salesDriveImageFour,
    },
  ],
};

export const SDRSalesDrive: SalesDriveProp = {
  title: "How Genie Drives Your Sales",
  items: [
    {
      id: 1,
      title: "1. Find Your Ideal Buyers ",
      details:
        "With Genie, create an Ideal Customer Profile and reach high-value buyers globally. Genie connects with potential leads across industries, pinpointing those who match your target profile and positioning your brand to make the best impression.",
      image: salesDriveImageOne,
    },
    {
      id: 2,
      title: "2. Unified Multi-Channel Engagement",
      details:
        "Engage consistently through email, Linkedin, and other platforms, ensuring a unified approach to every prospect. Genie automates follow-ups, keeping leads warm and engaged across channels without extra manual input.",
      image: salesDriveImageTwo,
    },
    {
      id: 3,
      title: "3. Hyper-Personalization at Scale",
      details:
        "Genie's Al-driven insights allow for targeted outreach with precision that goes beyond human capabilities. Each email and message is customized based on the prospect's role, industry, and specific pain points, resulting in higher engagement and conversion rates.",
      image: salesDriveImageThree,
    },
    {
      id: 4,
      title: "4. Always-On Functionality",
      details:
        "Operate your sales function 24/7 with Genie's autonomous capabilities. Genie SDR runs continuously, engaging leads, qualifying interest, and setting up appointments while your team focuses on strategic growth initiatives.",
      image: salesDriveImageFour,
    },
  ],
};

export const aiDrivenData: AiDrivenProp[] = [
  {
    id: 1,
    title: "Book More Meetings with Al",
    details:
      "Genie tailors each message based on the lead's recent LinkedIn activity and bio, ensuring your outreach feels personal and relevant, helping you stand out from the noise.",
    features: [
      "Respond in 10 Minutes or Less: Engage leads in real time.",
      "Manage Responses: Handle auto-replies, negative responses, and follow-ups.",
    ],
  },
  {
    id: 2,
    title: "Generate Leads from Our Extensive Database",
    details:
      "Genie provides access to over 700 million leads across 30 million companies, letting you filter for your ideal customer with precision to keep your campaigns running smoothly.",
    features: [
      "Enrich Data: Add value to existing leads with additional data points.",
      "ABM Outreach: Target specific accounts for a focused approach.",
    ],
  },
  {
    id: 3,
    title: "Manage Your Sales Pipeline",
    details:
      "Convert trial users to paying clients with Genie's Al-powered nurturing that highlights your product's value, resolves questions, and encourages subscription upgrades.",
    features: [
      "Automated Scheduling: Sync with Calendly or HubSpot to streamline meetings.",
      "Re-Engagement Campaigns: Keep your pipeline active and moving.",
    ],
  },
  {
    id: 4,
    title: "Empower Sales Engagement",
    details:
      "Convert trial users to paying clients with Genie's Al-powered nurturing that highlights your product's value, resolves questions, and encourages subscription upgrades.",
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
    name: "Frank",
    agentImg: agentOne,
    designation: "AI SDR",
    about: `Frank optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    route: "/ai-sdr",
  },
  {
    id: 2,
    name: "Sonya",
    agentImg: agentTwo,
    designation: "AI Phone Representative",
    about: `Sonya optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    route: "/ai-phone-representative",
  },
  {
    id: 3,
    name: "Mark",
    agentImg: agentThree,
    designation: "AI Worker",
    about: `Mark optimizes the frontlines of your sales process, enhancing your team's ability to reach, connect with, and engage prospective clients.`,
    route: "/ai-worker",
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
  title: "Genie VS Other AI",
  items: [
    {
      id: 1,
      category: "",
      genieFeature: "GenieAI",
      otherAIFeature: "Other AI",
    },
    {
      id: 2,
      category: "Marketing Precision",
      genieFeature: "Business intelligence with real-time optimization.",
      otherAIFeature: "Limited automation, lacks real-time adaptation.",
    },
    {
      id: 3,
      category: "Growth Focus",
      genieFeature: "Streamlines pipelines & enhances customer satisfaction",
      otherAIFeature: "Lacks growth-oriented strategy.",
    },
    {
      id: 4,
      category: "Technology",
      genieFeature: "Integrates seamlessly with CRM, ERP, & analytics tools.",
      otherAIFeature: "Requires extensive customization to fit workflows.",
    },
    {
      id: 5,
      category: "Management Efficiency",
      genieFeature: "Automates across departments, reducing workload",
      otherAIFeature: "Single-purpose tools that require manual",
    },
    {
      id: 6,
      category: "Customer Experience",
      genieFeature: "Provides 24/7 support with seamless escalation",
      otherAIFeature: "Lacking real-time assistance & escalation.",
    },
    {
      id: 7,
      category: "Data Security",
      genieFeature: "Industry-standard encryption & compliance",
      otherAIFeature: "Lack security measures & compliance standards.",
    },
    {
      id: 8,
      category: "Scalability",
      genieFeature: "Grows with your business",
      otherAIFeature: "Often requires additional resources",
    },
    {
      id: 9,
      category: "ROI Tracking",
      genieFeature: "Built-in analytics for clear insights",
      otherAIFeature: "Limited performance metrics & ROI tracking",
    },
  ],
};

export const aiPhonePageComparisonData: ComparisonDataProp = {
  title: "Sonya - Genie AI Phone Representative VS Traditional Call Centers",
  items: [
    {
      id: 1,
      category: "",
      genieFeature: "Sonya - Genie AI",
      otherAIFeature: "Traditional Call Centers",
    },
    {
      id: 2,
      category: "Cost Efficiency",
      genieFeature: "Automates high-volume inquiries",
      otherAIFeature: "Requires extensive staffing and training",
    },
    {
      id: 3,
      category: "24/7 Availability",
      genieFeature: "Operates continuously regardless of time zones.",
      otherAIFeature:
        "Limited to business hours or high cost after-hours coverage.",
    },
    {
      id: 4,
      category: "Consistency In Quality",
      genieFeature: "Delivers uniform, standardized responses",
      otherAIFeature: "Quality can vary between agents due to fatigue",
    },
    {
      id: 5,
      category: "Personalization Capabilities",
      genieFeature: "Leverages CRM data & AI to tailor responses",
      otherAIFeature: "Personalization depends on agents' memory or notes",
    },
    {
      id: 6,
      category: "Call Routing & Escalation",
      genieFeature: "Identifies & routes complex issues to appropriate team",
      otherAIFeature: "Often involves lengthy transfers",
    },
    {
      id: 7,
      category: "Multi-Language Support",
      genieFeature: "Provides support across multiple languages",
      otherAIFeature: "Limited language support",
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
