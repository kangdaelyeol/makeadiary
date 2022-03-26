

class Manager {
  
  /*  function name - addDiary
      input - setDB: Function / title: String / context: String
      output - x
      description - get a setDB function which is from useState, title, context
                    , by using setDB function it can add one of diary object to DB
      writing date - 2022, 03, 24
      writer - Daniel   */
  addDiary = (setDB, title, context, background) => {
    const id = createId();
    const diary = {
      id,
      title,
      createAt: createAt(),
      context,
      background: background || ""
    };  
    setDB(state => {
      const newDiary = {};
      Object.keys(state).forEach(key => {
        newDiary[key] = { ...state[key] }
      });
      newDiary[id] = diary;
      return newDiary;
    });
  }

  /*  function name - updateDiary
      input - setDB: Fucntion, title: String, context: String, id: Number
      output - x
      description - get a setDB function from useState, title, context, id
                    and change the object matched which given id.
                    I could change all of object during I process "forEach"
                    but I used "if else" logic to process faster.
                    I think there is little difference
                    , but it's better than not.
                    I'm very satisfied.
      writing date - 2022, 03, 24
      wirtier - Daniel
   */

  updateDiary = (setDB, title, context, id, background) => {
    setDB(state => {
      const newDiary = {};
      newDiary[id] = {
        ...state[id],
        title,
        context,
        background: background || "",
      }
      Object.keys(state).keys(key => {
        if(id === key) return;
        newDiary[id] = {
          ...state[id]
        }
      })
      return newDiary;
    })
  }

  /*  function name - deleteDiary
      input - setDB: Function / id: Number
      output - x
      description - get a setDB function which is from useState, id.
                    if the ID of Diary object in DB is matching with given ID,
                    that diary object will not save at new Diary object
                    and set the new diary object.
      writing date - 2022, 03, 24
      writer - Daniel
   */
  deleteDiary = (setDB, id) => {
    setDB(state => {
      const newDiary = {};
      Object.keys(state).forEach(key => {
        if(id === state[key].id) return;
        newDiary[key] = {
          ...state[key]
        };
      })
      return newDiary;
    })
  }
}


const createId = () => {
  return Date.now()
}

const createAt = () => {
  return new Date().toISOString().slice(0, 10);
}

export default Manager;