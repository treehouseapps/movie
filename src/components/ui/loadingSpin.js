import { ClipLoader } from 'react-spinners'

const LoadingSpin = ({ data: loading }) => {

	return (
			<div className="spinner-container">
          <ClipLoader className="loading"
           color="blue" loading={loading} size={50} />
        </div>
		)
}

export default LoadingSpin