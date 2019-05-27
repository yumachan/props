import React from 'react';
import ReactDOM from 'react-dom';
import Commentdetail from './CommentDetail';
import faker from 'faker';
import ApprovalDetails from './ApprovalDetails';

const App = () =>{
    return(
       <div>
           <ApprovalDetails>
       
           <Commentdetail author="yuma" time="yesterday in forum mall" content="i am happy" avatar={faker.image.avatar()}/>
           </ApprovalDetails>
           <ApprovalDetails>
           <Commentdetail author="sumit" time="today" content="sad" avatar={faker.image.avatar()}/>
           </ApprovalDetails>
           <ApprovalDetails>
           <Commentdetail author="padma" time="2019/5/27" content="i like travel" avatar={faker.image.avatar()}/>
           </ApprovalDetails>
       </div>
    )
}

ReactDOM.render(<App/>,document.querySelector("#root"));