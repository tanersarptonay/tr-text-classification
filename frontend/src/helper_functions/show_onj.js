		function renderObject()
		{
		    return Object.keys(prob_named_arr).map((obj, i) => {
		        return (
		            <div>
		                label is: {prob_named_arr[obj].label} ;
		                value is: {prob_named_arr[obj].value}
		            </div>
		        )
		    })
		}