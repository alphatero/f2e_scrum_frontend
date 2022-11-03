import clsx from 'clsx';

function RoleIntro() {
  return (
    <div className={clsx({ 'p-4': true })}>

      {/* open card */}
      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3': true })}>
        <div className={clsx({ 'float-right ml-3': true })}>
          <div className={clsx({ 'relative w-48 h-60 justify-items-center': true })}>
            <div className={clsx({ 'absolute m-auto inset-0 w-5/6 h-5/6 border border-zinc-800': true })} />
            <img className={clsx({ 'absolute m-auto inset-0 w-48 h-60': true })} alt="PO" src="https://source.unsplash.com/random/150x200" />

          </div>

        </div>

        PO (Product Owner)
        <br />
        產品負責人
        <br />
        <br />
        座右銘
        只要有我在，就沒有發散的需求，因為只有我有資格說不！
        <br />
        <br />
        我是 Product Owner 產品負責人，叫我PO就可以了，我的工作項目是搜集客戶的需求，
        釐清並轉化成具有商業價值的 User Story，我最擅長的就是列優先順序喔！再將這些從 Backlog 放至 Sprint當中。
        <br />
        <br />
        我的願景，就是希望我的產品讓客戶會喜歡！

      </div>

      {/* close card */}
      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3 mt-10': true })}>
        <div className={clsx({ 'float-right ml-3': true })}>
          <div className={clsx({ 'relative w-24 h-28 justify-items-center': true })}>
            <img className={clsx({ 'absolute m-auto inset-0 top-[-18vw] h-20': true })} alt="PO" src="https://source.unsplash.com/random/150x200" />

          </div>

        </div>

        SM (Scrum Master)
        <br />
        Scrum 主持人

      </div>

      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3 mt-10': true })}>
        <div className={clsx({ 'float-right ml-3': true })}>
          <div className={clsx({ 'relative w-24 h-28 justify-items-center': true })}>
            <img className={clsx({ 'absolute m-auto inset-0 top-[-18vw] h-20': true })} alt="PO" src="https://source.unsplash.com/random/150x200" />

          </div>

        </div>

        DEV (Development Team)
        <br />
        開發團隊

      </div>

    </div>
  );
}

export default RoleIntro;
