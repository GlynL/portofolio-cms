import React from 'react'

const Skills = ({ skills }) => {
  console.log(skills)
  return (
    <section id="skills" className="skills" tabIndex="0">
      <header className="skills__header">
        <h2>Skills</h2>
        <hr />
      </header>
      <div className="skills__list">
        {skills.edges.map((document, i) => (
          <li className="skills__item" key={document.node.id}>
            <img
              src={`http://localhost:1337${document.node.image.url}`}
              alt={document.node.image.name}
              title={document.node.image.name}
            />
          </li>
        ))}
      </div>
    </section>
  )
}

export default Skills
