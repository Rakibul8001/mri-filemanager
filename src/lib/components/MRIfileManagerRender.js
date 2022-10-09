import React,{ useState,useCallback } from 'react';
import { useEffect } from 'react';
import toast from './Toast';
import MRIAxios from './Axios';

export default function MRIfileManagerRender(props) {
  const {http} = MRIAxios();

  const notify = React.useCallback((type, message) => {
      toast({ type, message });
    }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>setShow(true)

  const [files, setFiles] = useState({
    upload_files:[],
    upload_ids:[],
  })

  const [selecteLoading, setSelectLoading] = useState(false);
  
  const uploadIds=async(Ids)=>{
    //console.log(Ids)
    let isSubscribed = true
    setSelectLoading(true);
    await http.post(`${process.env.NEXT_PUBLIC_DOMAIN}/app/uploader/upload`,{action: "getSelectedFiles", upload_files:Ids})
    .then((res)=>{
        // if(isSubscribed){
          //console.log(res.data.data);
          setFiles(prev=>({
            ...prev, 
            upload_files: res.data.data,
            upload_ids:Ids,
          }));

          {props.setIds(Ids)}

          if(props.setFilesData){
            {props.setFilesData(res.data.data)}
          }
          
          setShow(false);
          setSelectLoading(false)
        // }
    })
    .catch((err)=>{
      console.log('Something went wrong !')
      setSelectLoading(false)
    });
    


    const timer = setTimeout(() => {
      console.log("set time out...")
      
    },1000);
    return () => clearTimeout(timer);

  }


  return props.render(show,handleClose,uploadIds,selecteLoading,handleShow,files);

}
