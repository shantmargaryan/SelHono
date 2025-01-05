import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'


// pages
const Home = lazy(() => import("/src/pages/Home"))
const About = lazy(() => import("/src/pages/About"))
const Services = lazy(() => import("/src/pages/Services"))
const SingleServices = lazy(() => import("/src/pages/SingleServices"))
const Pricing = lazy(() => import("/src/pages/Pricing"))
const Project = lazy(() => import("/src/pages/Project"))
const ProjectDetails = lazy(() => import("/src/pages/ProjectDetails"))
const Blog = lazy(() => import("/src/pages/Blog"))
const BlogDetails = lazy(() => import("/src/pages/BlogDetails"))
const Contact = lazy(() => import("/src/pages/Contact"))
const Faq = lazy(() => import("/src/pages/Faq"))
const Error = lazy(() => import("/src/components/404"))

// pages
function App() {


  return (
    <>
      <Header />
      <main className='main'>
        <Suspense fallback={<div className='loading'><span className='loader' >Loading...</span></div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/SingleServices' element={<SingleServices />} />
            <Route path='/Pricing' element={<Pricing />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/ProjectDetails/:title/:id' element={<ProjectDetails />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/BlogDetails/:id' element={<BlogDetails />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Suspense>
      </main>
      {
        useLocation().pathname !== '/404' &&
        <Footer />
      }
    </>
  )
}

export default App
