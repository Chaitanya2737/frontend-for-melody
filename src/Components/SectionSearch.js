import React from 'react'
import Navbar from './Navbar/Navbar'
import Container from '@mui/material/Container'
import Search from './Search/Search'
import QuestionAndAnswer from './Question & answer section/QuestionAnd Answer'

const SectionSearch = () => {
  return (
    <Container style={{maxWidth:"1300px"}}> 
<Navbar />
<Search visible={false}/>
<QuestionAndAnswer/>
    </Container>
  )

}

export default SectionSearch