import {Counter} from '../../components/counter';

const MainPage = () => {

  return (
    <div>
      <h1>Main page</h1>
      {new Array(100).fill(0).map((_, index) => (
        <div>{index}</div>
      ))}
    </div>
  )
}

export default MainPage;