import clsx from 'clsx';

function BacklogSetting() {
  return (
    <div className={clsx({ 'p-4': true })}>

      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3': true })}>
        {/* first task */}
        <div className={clsx({ 'w-full grid grid-cols-4 gap-2 rounded-lg bg-zinc-200 p-3': true })}>
          <div className={clsx({ 'col-span-3': true })}>會員系統(登入、註冊、權限管理)</div>
          <div>
            <div className={clsx({ 'rounded-lg p-1 bg-white text-center': true })}>優先度高</div>
          </div>
        </div>

        {/* second task */}
        <div className={clsx({ 'w-full grid grid-cols-4 gap-2 rounded-lg bg-zinc-200 p-3 mt-3': true })}>
          <div className={clsx({ 'col-span-3': true })}>前台職缺列表(職缺詳細內容、點選可發送應徵意願)</div>
          <div>
            <div className={clsx({ 'rounded-lg p-1 bg-white text-center': true })}>優先度中</div>
          </div>
        </div>

        {/* second task */}
        <div className={clsx({ 'w-full grid grid-cols-4 gap-2 rounded-lg bg-zinc-200 p-3 mt-3': true })}>
          <div className={clsx({ 'col-span-3': true })}>後台職缺管理(資訊上架、下架、顯示應徵者資料)</div>
          <div>
            <div className={clsx({ 'rounded-lg p-1 bg-white text-center': true })}>優先度低</div>
          </div>
        </div>

        {/* second task */}
        <div className={clsx({ 'w-full grid grid-cols-4 gap-2 rounded-lg bg-zinc-200 p-3 mt-3': true })}>
          <div className={clsx({ 'col-span-3': true })}>應徵者的線上履歷編輯器</div>
          <div>
            <div className={clsx({ 'rounded-lg p-1 bg-white text-center': true })}>優先度高</div>
          </div>
        </div>

      </div>
      <div className={clsx({ 'w-full h-5 text-center m-3': true })}>﹀ ﹀ ﹀</div>
      <div className={clsx({ 'w-full h-5 text-right mb-1': true })}>優先度高</div>
      <div className={clsx({ 'border border-zinc-800 rounded-lg p-3 h-[40vh]': true })}>
        {/* drag to here */}
      </div>
      <div className={clsx({ 'w-full h-5 text-right mb-1': true })}>優先度低</div>

    </div>
  );
}

export default BacklogSetting;
