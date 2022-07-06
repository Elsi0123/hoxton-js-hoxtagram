type CommentData = {
    id: number
    content: string
    imageId: number
  }
  
  type Image = {
    id: number
    title: string
    likes: number
    image: string
    comments: CommentData[]
  }
  
  type State = {
    images: Image[]
  }
  
  let state: State = {
    images: []
  }
  
 //get
  
  function getImagesFromServer () {
    fetch('http://localhost:4000/images')
      .then(resp => resp.json())
      .then(imagesFromServer => {
        state.images = imagesFromServer
        render()
      })
  }
  
  function updateImage (image) {
    return fetch(`http://localhost:4000/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    }).then(resp => resp.json())
  }
  //patch
  function render () {
    let imageContainer = document.querySelector<HTMLElement>('.image-container')
    if (imageContainer === null) return
    imageContainer.textContent = ''
  
    
  
  getImagesFromServer()
  render()