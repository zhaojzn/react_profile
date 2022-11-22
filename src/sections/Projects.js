import Experiences from "../components/Experiences"
import { useNav } from "../hooks/useNav"

const Projects = () => {
  const projectsRef = useNav("Projects")

  return (
    <section ref={projectsRef} id="projectsSection" className="secondary-section">
      <h2>Projects</h2>
      <p>Testing these are my projects</p>

      <Experiences />
    </section>
    
  )
}

export default Projects