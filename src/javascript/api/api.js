const api={
	request ({url, data, methods}) {
        return $.ajax(
			{
				url:url,
				methods:"get",
				data:{},
				success:(res)=>{
					return res;
					
				},
				error:(err)=>{
					return('请求出错');
					
				}
			}
		)
		},
}

module.exports=api;