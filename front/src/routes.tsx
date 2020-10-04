import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//importanto os componentes
import Introduction from './pages/introduction/index'
import Introduction_pt2 from './pages/introduction/introduction_pt2'

//formulário de registro
import Register from './pages/register/index'

//questions
import Question_1 from './pages/questions/question_1'
import Question_2 from './pages/questions/question_2'
import Question_3 from './pages/questions/question_3'
import Question_4 from './pages/questions/question_4'

const Routes: React.FC = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Introduction} exact/>
                <Route path="/introduction_pt2" component={Introduction_pt2}/>

                {/* ROTA PARA O FORMULÁRIO DE REGISTRO */}
                <Route path="/register" component={Register}/>

                {/* ROTA PARA AS PÁGINAS DE QUESTÕES */}
                <Route path="/question_1" component={Question_1}/>
                <Route path="/question_2" component={Question_2}/>
                <Route path="/question_3" component={Question_3}/>
                <Route path="/question_4" component={Question_4}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes