const { QRCodeCanvas } = require("qrcode.react")
const { useState } = require("react")

const QRCode = () => {
  const [url, setUrl] = useState('')

  const downloadQrCode = (e) => {
    e.preventDefault()
    setUrl('')
  }

  const qrCodeEncode = (e) => {
    setUrl(e.target.value)
  }

  const qrcode = (
    <QRCodeCanvas 
      id='qrCode'
      value={url}
      size={300}
      bgColor={'#FFF'}
      level='H'
    />
  )

  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="qrcode__group">
        <form onSubmit={downloadQrCode}>
          <label>Enter the text</label>
          <input type="text" value={url} onChange={qrCodeEncode} placeholder="Ingrese el texto" />
          <button type="submit" disabled={!url}>Download QR</button>
        </form>
      </div>
    </div>
  )
}

export default QRCode;