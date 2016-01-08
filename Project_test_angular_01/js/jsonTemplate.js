/* STructure of Json Generator */
		/*
		[
		  '{{repeat(5, 7)}}',
		  {
		    id: '{{index()}}',
		    name: '{{company().toUpperCase()}}',
		    content: '{{lorem(1)}}',
		    comments: [   
		       '{{repeat(1,3)}}',
		      {
		        username: "{{firstName()}}",
		        city: "{{city()}}",
		        email:	"{{email()}}",
		        content:"{{lorem(3)}}"
		      }
		    ]    
		  }
		]
		*/
