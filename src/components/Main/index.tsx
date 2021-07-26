const Main = ({
  title = 'Boilerplate do Rafinha',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
  quote = 'Baseado no do Willian Justen e muito grato pelos seus ensinamentos.'
}) => (
  <main style={{ color: 'white' }}>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <p>{quote}</p>
  </main>
)

export default Main
