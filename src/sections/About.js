import { useNav } from "../hooks/useNav"
import github from "../images/github.png"
const About = () => {
  const aboutRef = useNav("About")

  return (
    <section ref={aboutRef} id="aboutSection">
      <h2>Jason Zhao</h2>
      <p>just your average highschool student</p>
      <a href="https://github.com/zhaojzn">
      <img src={github} alt="Logo"/>
      </a>

    </section>
  )
}

export default About