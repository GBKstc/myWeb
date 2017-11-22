
import bussinessOffice from '../../routes/bussiness_office/BussinessOffice';



const BussinessOffice = {
  path: '/BussinessOffice',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, bussinessOffice)
    })
  },
};
export default BussinessOffice;
