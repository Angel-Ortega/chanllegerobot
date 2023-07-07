import TablaParticipantes from '../components/TablaParticipantes';
import Modal from '../components/Layout/ModalForm';

const Home = () => {
  return (
    <>
      <div className=" flex justify-between flex-grow mt-5">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Participantes
        </h1>
        <Modal />
      </div>
      <TablaParticipantes sort={false} />
    </>
  );
};
export default Home;
