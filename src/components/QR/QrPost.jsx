import React from "react";

import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Post } from "../Post";
// import { useEffect } from "react";
import { useEffect, useRef, useState } from "react";

import axios from "../../axios";
import QRCode from "react-qr-code";
import QRCodeStyling from "qr-code-styling";

import IconButton from '@mui/material/IconButton';
import DownloadingIcon from '@mui/icons-material/Downloading';

const url = (process.env.NODE_ENV==="development" ? "http://localhost:3000" : process.env.REACT_APP_WEB_URL)

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  // image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20
  }
});

export const QrPost = () => {
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении QR-кода');
      });
  }, []);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: `${url}/posts/${id}`
    });
  }, [id]);

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <div className="App">
      <div style={styles.inputWrapper}>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <IconButton onClick={onDownloadClick} color="inherit">
          <DownloadingIcon />
        </IconButton>
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20
  }
};



// const [inputValue, setInputValue] = React.useState('')
// export const QrPost2 = () => {
//   const [data, setData] = React.useState();
//   const [isLoading, setLoading] = React.useState(true);
//   const { id } = useParams();
//   const [inputValue, setInputValue] = React.useState('')

//   React.useEffect(() => {
//     axios
//       .get(`/posts/${id}`)
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.warn(err);
//         alert('Ошибка при получении QR-кода');
//       });
//   }, []);

//   if (isLoading) {
//     return <Post isLoading={isLoading} isQrPost />;
//   }

//   return (
//     <>
    
//       <QRCode 
//       className=""
//       value={`${process.env.REACT_APP_WEB_URL}/posts/${id}`} />
//     </>
//   );
// };


