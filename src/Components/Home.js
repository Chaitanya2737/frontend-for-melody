import React from 'react'
import Section from './Section/Section';

import Wrapper from './Wrapper/Wrapper'
import Search from './Search/Search'
import Swapper from './Swapper/Swapper'
import Specialisation from './SpecialisationSection/Specialisation'
import Specialist from './SpecialistSection/Specialist'
import Caring from './CaringSection/caring'
import Blog from './Blog & News section/Blog'
import Family from './Family section/Family'
import QuestionAndAnswer from './Question & answer section/QuestionAnd Answer'
import Fotter from './footer/Fotter'
import Download from './Download section/Download';

const Home = () => {
  return (
    <div className='container'>
    <Wrapper />
    <Search visible={true}/>
    <Swapper />
    <Specialisation />
    <Specialist />
    <Caring />
    <Blog />
    <Family />
    <QuestionAndAnswer/>
    <Download />
    </div>
  )
}

export default Home