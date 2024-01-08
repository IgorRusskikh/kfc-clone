/* eslint-disable react/prop-types */

export default function Button({ children }) {
  return (
    <button className="btnPrimary bgRed ceraFont">
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
}
