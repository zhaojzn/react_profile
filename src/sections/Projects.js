import Experiences from "../components/Experiences"
import { useNav } from "../hooks/useNav"

const Projects = () => {
  const projectsRef = useNav("Projects")

  return (
    <section ref={projectsRef} id="projectsSection" className="experience-section">
      <h1>Projects</h1>
      <Experiences />
    </section>
    
  )
}

export default Projects