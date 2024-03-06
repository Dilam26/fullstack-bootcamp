export const Note = ({id, important, content}) => {
  return(
    <div>
      <p>{id}</p>
      {important ? <strong>Es importante</strong> : <strong>No es importante</strong>}
      <p>{content}</p>
    </div>
  )
}
  