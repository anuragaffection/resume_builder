import React, { useState } from 'react'
import Styles from '../../styles/input.module.css'
import {DeleteForeverRounded} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { modifyExperience } from '../../redux/slices/experienceSlice.js'
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'



function Experience() {
  const dispatch = useDispatch();
  const experienceState = useSelector(state => state.experience)
  const [experience, setExperience] = useState(experienceState);

  const handleAddButtonClick = () => {
    if (experience.length < 4) {
      setExperience([...experience, {
        job_title: '',
        organization_name: '',
        start_year: '',
        end_year: '',
      }])
    }
  }

  const handleRemoveButtonClick = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
    scrollToTop()
  }

  const handleInputChange = (index, value, fieldType) => {
    // taking copy of whole array 
    // taking copy of whole object from specific index 
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index] };
    switch (fieldType) {
      case "job_title": updatedExperience[index].job_title = value; break;
      case "organization_name": updatedExperience[index].organization_name = value; break;
      case "start_year": updatedExperience[index].start_year = value; break;
      case "end_year": updatedExperience[index].end_year = value; break;
      default: break;
    }
    setExperience(updatedExperience);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyExperience(experience))
    dispatch(nextComponents(1));
    scrollToTop()
  }

  const goToPreviousComponents = () => {
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Experience </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            {
              experience.map((item, index) => {
                return (
                  <div key={index}>

                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="job_title"
                        className={Styles.labelStyle}>
                        Job Title
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='job_title'
                        placeholder={Details.experience[0].job_title}
                        value={item.job_title}
                        onChange={(e) => handleInputChange(index, e.target.value, 'job_title')}
                      />
                    </div>

                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="organization_name"
                        className={Styles.labelStyle}>
                        Organization Name
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='organization_name'
                        placeholder={Details.experience[0].organization_name}
                        value={item.organization_name}
                        onChange={(e) => handleInputChange(index, e.target.value, "organization_name")}
                      />
                    </div>

                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="start_year"
                        className={Styles.labelStyle}>
                        Start Year
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='start_year'
                        placeholder={Details.experience[0].start_year}
                        value={item.start_year}
                        onChange={(e) => handleInputChange(index, e.target.value, "start_year")}
                      />
                    </div>

                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="end_year"
                        className={Styles.labelStyle}>
                        End Year
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='end_year'
                        placeholder={Details.experience[0].end_year}
                        value={item.end_year}
                        onChange={(e) => handleInputChange(index, e.target.value, "end_year")}
                      />
                    </div>

                    <div className={Styles.labelInputWrapper}>
                      <div
                        className={Styles.buttonRemove}
                        onClick={() => handleRemoveButtonClick(index)}>
                        <p>Remove  </p>
                        <DeleteForeverRounded />
                      </div>
                    </div>

                    < hr className={Styles.hrLine} />
                  </div>
                )
              })
            }

            <div
              className={Styles.buttonAdd}
              onClick={() => handleAddButtonClick()}
            >
              <p>Add Experience </p>
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

export default Experience