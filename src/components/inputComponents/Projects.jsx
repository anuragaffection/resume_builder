import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch } from 'react-redux'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'



function Projects() {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextComponents(1));
    scrollToTop();
  }

  const goToPreviousComponents = () => {
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Projects  </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="project_name"
                className={Styles.labelStyle}>
                Project Name
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='project_name'
                placeholder={Details.projects[0].project_name}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="tech_stack"
                className={Styles.labelStyle}>
                Tech Stack
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='tech_stack'
                placeholder={Details.projects[0].tech_stack}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="github_link"
                className={Styles.labelStyle}>
                Github Link
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='github_link'
                placeholder={Details.projects[0].github_link}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="live_link"
                className={Styles.labelStyle}>
                Live Link
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='live_link'
                placeholder={Details.projects[0].live_link}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="description"
                className={Styles.labelStyle}>
                Description
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='description'
                placeholder={Details.projects[0].description}
              />
            </div>

            <div className={Styles.buttonWrapper}>
              <div
                className={Styles.button}
                onClick={() => goToPreviousComponents()}
              >
                <p>Back</p>
              </div>
              <button type='submit' className={Styles.button}>Next </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Projects