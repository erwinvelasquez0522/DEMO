// DataESP JavaScript Document

// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////



// GLOBAL service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPGlobalServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPGlobalServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPGlobalServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPGlobalServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// GLOBAL service call



// TREND ANALYSIS service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPTRENDANALYSISServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPTRENDANALYSISServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPTRENDANALYSISServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPTRENDANALYSISServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// TREND ANALYSIS service call



// CONSOLIDATION service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPCONSOLIDATIONServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPCONSOLIDATIONServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPCONSOLIDATIONServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPCONSOLIDATIONServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// CONSOLIDATION service call



// DEMAND FORECASTING service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPDEMANDFORECASTINGServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPDEMANDFORECASTINGServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPDEMANDFORECASTINGServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPDEMANDFORECASTINGServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// DEMAND FORECASTING service call



// MENU ITEM ASSORTMENT service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPMENUITEMASSORTMENTServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPMENUITEMASSORTMENTServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPMENUITEMASSORTMENTServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPMENUITEMASSORTMENTServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// MENU ITEM ASSORTMENT service call



// CAMPAIGN MANAGEMENT service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPCAMPAIGNMANAGEMENTServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPCAMPAIGNMANAGEMENTServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPCAMPAIGNMANAGEMENTServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPCAMPAIGNMANAGEMENTServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// CAMPAIGN MANAGEMENT service call



// CUSTOMER ATTRITION service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPCUSTOMERATTRITIONServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPCUSTOMERATTRITIONServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPCUSTOMERATTRITIONServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPCUSTOMERATTRITIONServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// CUSTOMER ATTRITION service call



// RECOMMENDATION service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPRECOMMENDATIONServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPRECOMMENDATIONServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPRECOMMENDATIONServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPRECOMMENDATIONServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// RECOMMENDATION service call



// REPORTS service call
// ///////////////////////////////////////////////////////////////
angular.module('DataESPREPORTSServiceCall', [])

// DataESP service Call
// each function returns a promise object 
.factory('Todos', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/DataESPREPORTSServiceCall');
		},
		create : function(todoData) {
			return $http.post('/api/DataESPREPORTSServiceCall', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/DataESPREPORTSServiceCall/' + id);
		}
	}
}]);
// ///////////////////////////////////////////////////////////////
// REPORTS service call



// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////










// Possible to resue the below

// UserSvc 
// ///////////////////////////////////////////////////////////////
angular.module('app')
.factory('UserSvc', ['$q', '$http', function ($q, $http) {

  // This function will update whatever fields there are
  // Use with high caution
  var editUser = function(company_id, user){
    var defer = $q.defer();
    $http({
      method: 'POST',
      url: sprintf('companies/%s/users/%s', company_id, user._id),
      data: user
    }).then(function(res){
      defer.resolve(res.data);
    }, function(err){
      console.log('Error editing user', err.data);
      defer.reject(err.data);
    })
    return defer.promise;
  }
  return {
    getAllUserFromCompany: function(company_id){
      var defer = $q.defer();
      $http({
        method: "GET",
        url: sprintf('/companies/%s/users', company_id)
      }).then(function(res){
        console.log('GET all user from company result:', res.data);
        defer.resolve(res.data);
      }, function(err){
        defer.reject(err);
      })
      // defer.resolve(users);
      return defer.promise;
    }, 
	
	
    createNewUser: function(company_id, email, role){
      var defer = $q.defer();
      console.log(sprintf('Creating new user with email [%s] and role [%s] for company id [%s]', email, role, company_id)) ;
      $http({
        method: 'POST',
        url: sprintf('/companies/%s/users', company_id),
        data: {
          email: email,
          role: role
        }
      }).then(function(res){
        defer.resolve(res.data);
      }, function(err){
        console.log('Error inviting new user ', err.data);
        defer.reject(err.data);
      })
      return defer.promise;
    },
	
	
    editUserRole: function(company_id, userId, newRole){
      var user = {_id: userId, role: newRole};
      return editUser(company_id, user);
    },
	
	
    editUserLanguage: function(company_id, userId, newLanguage){
      var user = {_id: userId, language: newLanguage}
      console.log('Editing user', user);
      return editUser(company_id, user);
    },
	
	
    removeUser: function(company_id, user){
      var defer = $q.defer();
      $http({
        method: 'DELETE',
        url: sprintf('companies/%s/users/%s', company_id, user._id)
      }).then(function(res){
        defer.resolve(res.data);
      }, function(err){
        console.log('Error deleting user', err.data);
        defer.reject(err.data);
      })
      return defer.promise;
    }
  };
}])

// ///////////////////////////////////////////////////////////////
// UserSvc 



// JobSvc 
// ///////////////////////////////////////////////////////////////
angular.module('app')
.factory('JobSvc', ['$http', '$q', '$log', '$window', 
	function ($http, $q, $log, $window) {
	var currentJobs;

	var queryJobs = function(company, query){
		var defer = $q.defer();
		var params = '';
		console.log('query in service', query);
		if(! $.isEmptyObject(query)){
			params = '?' + $.param(query);
		}
		console.log('Finding Jobs with param:', params);
		var url = '/companies/' + company._id + '/jobs' + params;
		$http({method: 'GET', url: url}).then(function(result){
				$log.debug('Query jobs successful', result);
				defer.resolve(result.data);
			}, function(err){
				$log.debug('Query jobs error', err);
				defer.reject(err.data);
			}
		);
		return defer.promise;
	}
	return {
		cancelJob: function(job){
			return $q(function(resolve, reject){
				//blah
			});
		},
		getAllJobs: function(company) {
			var defer = $q.defer();
			// result is an array of jobs
			// Get from cache
			if(currentJobs){
				defer.resolve(currentJobs);
			} else {
				var url = '/companies/' + company._id + '/jobs';
				$http({method: 'GET', url: url}).then(function(result){
						$log.debug('Get jobs successful', result);
						currentJobs = result.data;
						defer.resolve(currentJobs);
					}, function(err){
						$log.debug('Get user Job data failed:', err);
						defer.reject(err);
					}
				);
			}
			return defer.promise;
		},

		getJobsStatistics: function(company) {
			var defer = $q.defer();

			console.log('Query job statistics.');
			var url = '/companies/' + company._id + '/jobs/statistics';
			$http({method: 'GET', url: url}).then(function(result){
				defer.resolve(result.data);
			}, function(err){
				defer.reject(err.data);
			});
			return defer.promise;
		},

		getRecentJobs: function(company){
			// get only COMPLETED jobs belongst to this company
			return queryJobs(company, {status: 'done'});
		},

		queryJobs: queryJobs,

		queryJobStatus: function(company, job){
			if( !job)
			{
				var defer = $q.defer();
				setTimeout(
					function(){
						defer.resolve({
							data: {
								progress: 0,
								status: "submitted"
							}	,
							error: {
							code:200,
							message:"OK"} ,
					success:true
						})
					}, 1000);
				return defer.promise;


			}

			// TODO: remove this mock when backend implement the Trend Analysis
			else if(job.module == "Trend Analysis" || job.module == "Consolidation"){
				var defer = $q.defer();
				var submittedTime = new Date(job.submittedTime);
				var estimatedCompletion = new Date(submittedTime.getTime() + (1000*30));
				var now = new Date();
				var status = "processing";

				var progress = Math.round(100 * (now - submittedTime.getTime()) / (1000*30));
				progress = Math.min(progress, 100);

				if(now >= estimatedCompletion){
					status = "done";
					progress = 100;
				}
				setTimeout(
					function(){
						defer.resolve({
							data: {
								progress: progress,
								status: status
							}
						})
					}, 300);
				return defer.promise;

			}
			else {
				var defer = $q.defer();
				console.log('Query job status, id:', job._id);
				var url = '/companies/' + company._id + '/jobs/' + job._id + '/status';

				console.log( "GET URL: " , url )

				$http({method: 'GET', url: url}).then(function(result){
					defer.resolve(result.data);
				}, function(err){
					defer.reject(err.data);
				});
				return defer.promise;
			}
		},

		getJobOutputURL: function(job){
			switch(job.module){
				case 'Demand Forecasting':
					if(job.industry == 'General Goods'){
						return "app#/report-demand-forecast-generic?jobId=" + job._id;
					} else {
						return "app#/report-demand-forecast?jobId=" + job._id;
					}
					break;
				case 'Business Intelligence':
					return "app#/report-business-intelligence";
					break;
				case 'Menu Item Assortment':
					return "app#/report-menu-item-assortment?jobId=" + job._id;
					break;
				case 'Trend Analysis':
					return "app#/report-trend-analysis?jobId=" + job._id;
					break;
				case 'Distribution & Consolidation':
					return "app#/report-distribution-consolidation?jobId=54a4fa4a842996000049348a";
					break;
				case 'Allocation':
					return "app#/report-distribution-consolidation?jobId=" + job._id;
					break;
				case 'Consolidation':
					return "app#/report-distribution-consolidation?jobId=" + job._id;
					break;
			}
		},

		getJob: function(company, jobId){
			var defer = $q.defer();

			console.log('Get job information', jobId);
			var url = '/companies/' + company._id + '/jobs/' + jobId;
			$http({method: 'GET', url: url}).then(function(result){
				defer.resolve(result.data);
			}, function(err){
				defer.reject(err.data);
			});
			return defer.promise;
		},

		getJobOutput: function(company, jobId){
			var defer = $q.defer();

			console.log('Get job output', jobId);
			var url = '/companies/' + company._id + '/jobs/' + jobId + '/output';
			$http({method: 'GET', url: url}).then(function(result){
				defer.resolve(result.data);
			}, function(err){
				defer.reject(err.data);
			});
			return defer.promise;
		},

		updateJob: function(company, jobId, jobData){
			var defer = $q.defer();

			console.log('Update job statistic ', jobId);
			var url = '/companies/' + company._id + '/jobs/' + jobId;
			$http({method: 'POST', url: url, data: jobData}).then(function(result){
				defer.resolve(result.data);
			}, function(err){
				defer.reject(err.data);
			});
			return defer.promise;
		},

		updateJobCache: function(newJob){
			if(currentJobs){
				currentJobs.push(newJob);
			} else {
				currentJobs = [newJob];
			}
		},

		createNewJob: function(jobData){
			var defer = $q.defer();
			// TODO: remove this mock when backend implement the Trend Analysis 
			if(jobData.module == "Trend Analysis" || jobData.module == "Consolidation"){
				jobData.status = "done";
				var now = new Date();
			}
			var url = '/companies/' + $window.company._id + '/jobs';
			console.log('jobData before POST:', jobData);
			$http({method: 'POST', url: url,
				data: jobData}).then(function(result){
					$log.debug('New job is created', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Job submit is failed:', err);
					defer.reject(err);
				}
			);
			return defer.promise;
		},

		getJobFeasibility: function(feasibilityRequest){
			var defer = $q.defer();
			var url = '/companies/' + $window.company._id + '/feasibility';
			console.log('Feasibility request:', feasibilityRequest);
			$http({method: 'POST', url: url,
				data: feasibilityRequest}).then(function(result){
					$log.debug('Feasibility result:', result.data);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Feasibility check failed:', err);
					defer.reject(err);
				}
			);
			return defer.promise;
		},

		viewRecommendations: function(recommendationRequest){
			recommendationRequest.industry = 'GENERAL';
			recommendationRequest.module = 'RECOMMENDLOOKUP';
			recommendationRequest._id = $window.company._id;

			var defer = $q.defer();
			var url = '/companies/' + $window.company._id + '/recommendation';
			console.log('Recommendation request:', JSON.stringify(recommendationRequest));
			$http({method: 'POST', url: url,
				data: recommendationRequest}).then(function(result){
					$log.debug('Recommendation result:', result.data);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Recommendation check failed:', err);
					defer.reject(err);
				}
			);
			return defer.promise;
		},
		randomCustomer: function(recommendationRequest){
			recommendationRequest.industry = 'GENERAL';
			recommendationRequest.module = 'RECOMMENDLOOKUP';
			recommendationRequest._id = $window.company._id;

			var defer = $q.defer();
			var url = '/companies/' + $window.company._id + '/recommendationRandomIDs';
			console.log('Random Customer ID request:', JSON.stringify(recommendationRequest));
			$http({method: 'POST', url: url,
				data: recommendationRequest}).then(function(result){
					$log.debug('Recommendation result:', result.data);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Recommendation check failed:', err);
					defer.reject(err);
				}
			);
			return defer.promise;
		},

		deleteJob: function(companyId, jobId ){
			var defer = $q.defer();
			var url = '/companies/' + companyId + '/jobs/' + jobId;
			console.log('Delete job', jobId);
			$http({method: 'DELETE', url: url}).then(function(result){
					$log.debug('Deleted job', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Job delete is failed:', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		},
		deleteJobReport: function(job ){
			var defer = $q.defer();
			var url = '/companies/' + job._companyId + '/jobs/' + job._id;
			console.log('Delete job', job._id);
			$http({method: 'DELETE', url: url}).then(function(result){
					$log.debug('Deleted job', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Job delete is failed:', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		},

		shareJob: function(jobData, users, customMessage){
			var defer = $q.defer();

			var url = '/companies/' + jobData._companyId + '/jobs/' + jobData._id + '/share';
			console.log('Share job', jobData);
			$http({
				method: 'POST',
				url: url,
				data: {users: users, customMessage: customMessage}
			}).then(function(result){
					$log.debug('Shared job', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Failed share job:', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		}

	};
}])
// ///////////////////////////////////////////////////////////////
// JobSvc 



// DataFileSvc 
// ///////////////////////////////////////////////////////////////
angular.module('app')
.factory('DataFileSvc', ['$http', '$q', '$log', '$window', 
	function ($http, $q, $log, $window) {
	return {
		// Create the file and 
		// get AWS signed key
		createFile: function(file) {
			var defer = $q.defer();
			$http({
				method: 'POST',
				url: sprintf('/companies/%s/files', $window.company._id),
				data: file
			}).then(function(result){
				defer.resolve(result.data);
			}, function(err){
				defer.reject(err.data);
			});
			return defer.promise;
		},
		queryFileStatus: function(company, fileId){
			var defer = $q.defer();
			var url = '/companies/' + company._id + '/files/' + fileId;

			$http({method: 'GET', url: url, data: {status: status}}).then(function(result){
				$log.debug('Query file status successful ', result.data);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Query file status query ', err);
					defer.reject(err.data);
				}
			)
			return defer.promise;
		},
		// Update data file record with values from data parameter
		updateFile: function(company, fileId, data){
			var defer = $q.defer();
			var url = '/companies/' + company._id + '/files/' + fileId;
			$http({method: 'POST', url: url, data: data}).then(function(result){
				$log.debug('File status update successful', result.data);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('File status update error', err);
					defer.reject(err.data);
				}
			)
			return defer.promise;
		},
		queryDataFiles: function(company, query){
			var defer = $q.defer();
			var params = '';
			console.log('query in service', query);
			if(! $.isEmptyObject(query)){
				params = '?' + $.param(query);
			}
			console.log('Finding Data files with param:', params);
			var url = '/companies/' + company._id + '/files' + params;
			$http({method: 'GET', url: url}).then(function(result){
					$log.debug('Query Data files successful', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Query Data files error', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		},

		deleteData: function(dataFile){
			var defer = $q.defer();
			var url = '/companies/' + $window.company._id + '/files/' + dataFile;
			console.log('Delete data file', dataFile);
			$http({method: 'DELETE', url: url}).then(function(result){
					$log.debug('Deleted data file', result);
					defer.resolve(result.data);
				}, function(err){
					$log.debug('Data file delete is failed:', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		}
	};
}])
// ///////////////////////////////////////////////////////////////
// DataFileSvc 



// CheckoutSvc 
// ///////////////////////////////////////////////////////////////
angular.module('app')
	.factory('CheckoutSvc', ['$http', '$q', '$log', '$window', function($http, $q, $log, $window) {

		var currentProduct = {
			industry: "Fashion Retail",
			module: "demand_forecasting",
			plan: "STANDARD"// STANDARD or PREMIUM
		};

		var getAlipayDefaultParams = function(){
			return {
				paygateway:	"http://www.alipay.com/cooperate/gateway.do?",
				service: "create_forex_trade",
				sign_type: "MD5",
				// out_trade_no: Now_Date.toString(), //external deal No
				_input_charset:  "utf-8",
				partner: "2088911294464398", //partners’ User ID at alipay
				body: "Alipay", //trade description
				// total_fee: "0.01", //range is 0.01～1000000.00
				// currency:  "USD", //Please refer to the short name
				subject: "Alipay",

				notify_url: "http://118.200.124.74:90/alipay",
				//Notification acceptance URL after the successful payment of the deal

				return_url: "http://localhost:8080/pay/alipay_return.jsp"
				//After successful payment, return the result to URL, which is only appropriate to interface of immediate return transaction result.
			}
		}

		var createAlipayItem = function(plan){
			var defer = $q.defer();
			$log.info('generating alipay item with plan ', plan);
			var url = '/companies/' + company._id + '/checkout/alipayCheckoutItem';
			$http({method: 'POST', data: plan, url: url}).then(function(result) {
					$log.debug('Creating Alipay item successful', result.data);
					defer.resolve(result.data);
				}, function(err) {
					$log.debug('Creating Alipay item error', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		}

		var generateSignedUrl = function(alipayItem){
			var defer = $q.defer();
			$log.info('Creating alipay signature with item ', alipayItem);
			var url = '/companies/' + company._id + '/checkout/alipaySignedUrl';

			var alipayRequest = getAlipayDefaultParams();

			alipayRequest.out_trade_no = alipayItem._id;
			alipayRequest.total_fee = alipayItem.total_fee;
			alipayRequest.currency = alipayItem.currency;

			$http({method: 'POST', data: alipayRequest, url: url}).then(function(result) {
					$log.debug('Creating Alipay signature successful', result.data);
					defer.resolve(result.data);
				}, function(err) {
					$log.debug('Creating Alipay signature error', err);
					defer.reject(err.data);
				}
			);
			return defer.promise;
		}

		var getCurrentProduct = function(){
			return currentProduct;
		}
		return {
			setCurrentPlan: function(plan){
				currentProduct = plan;
			},
			getCurrentProduct: function(){
				return getCurrentProduct();
			},
			// return: promise with signed request
			payWithAlipay: function(){
				var currentProduct = getCurrentProduct();
				return createAlipayItem(currentProduct)
					.then(function(result){
						return generateSignedUrl(result);
					})
			}
		}
}])
// ///////////////////////////////////////////////////////////////
// CheckoutSvc 
