import "./Step1.scss"

const gender = [
  { id: "mr", title: "先生" },
  { id: "ms", title: "小姐" },
  { id: "mx", title: "不明" },
]

const location = [
  { id: 'defult', title: '請選擇縣市' },
  { id: 'KLU', title: '基隆市' },
  { id: 'TPH', title: '新北市' },
  { id: 'TPE', title: '台北市' },
  { id: 'TYC', title: '桃園市' },
  { id: 'HSH', title: '新竹縣' },
  { id: 'HSC', title: '新竹市' },
  { id: 'TXG', title: '臺中市' },
  { id: 'TNN', title: '臺南市' },
  { id: 'KHH', title: '高雄市' },
]

function Option(info) {
  return (
    <>
      {info.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
    </>
  )
}


export default function Step1() {
  return (
    <section className="stepOne" data-phase="1">
      <h3 className="formTitle">寄送地址</h3>
      <div className="stepoOneContainer">
        <div className="formItem formGender">
          <div className="inputLabel">稱謂</div>
          <div className="selectContainer">
            <select required>
              <Option data={gender} />
            </select>
          </div>

        </div>
        <div className="formItem formName">
          <div className="inputLabel">姓名</div>
          <input type="text" placeholder="請輸入姓名" />
        </div>
        <div className="formItem formTel">
          <div className="inputLabel">電話</div>
          <input type="text" placeholder="請輸入電話" />
        </div>
        <div className="formItem formEmail">
          <div className="inputLabel">Email</div>
          <input type="text" placeholder="請輸入電子郵件" />
        </div>
        <div className="formItem formCity">
          <div className="inputLabel">縣市</div>
          <div className="selectContainer">
            <select required>
              <Option data={location} />
            </select>
          </div>
        </div>
        <div className="formItem formAddress">
          <div className="inputLabel">地址</div>
          <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </section>
  );
}