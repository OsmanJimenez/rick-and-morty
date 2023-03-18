// import { HttpStatusCode } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { generateManyCountries, generateOneCountry } from '@models/catalogs/country.mock';
// import { environment } from 'src/environments/environment';

// import { ApiService } from './api.service';

// describe('ApiService', () => {
//   let service: ApiService
//   let httpController: HttpTestingController
//   let urlEndpoint = '/catalogue/country'
//   let data = generateOneCountry()

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [ApiService]
//     })

//     service = TestBed.inject(ApiService)
//     httpController = TestBed.inject(HttpTestingController)
//   })

//   it('should be create', () => {
//     expect(service).toBeTruthy()
//   })

//   describe('test for getAll Countries ', () => {
//     it('should send a GET request to the correct URL', () => {
//       service.getAll(urlEndpoint).subscribe()

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('GET')
//       httpController.verify()
//     })

//     it('should return a request countries', (doneFn) => {
//       const mockData: any[] = [
//         {
//           ok: true,
//           status: 200,
//           payload: generateManyCountries()
//         }
//       ]

//       service.getAll(urlEndpoint).subscribe((data) => {
//         expect(data).toEqual(mockData)
//         doneFn()
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       req.flush(mockData)
//       httpController.verify()
//     })

//     it('should return a countries list', (doneFn) => {
//       const mockData: any[] = [
//         {
//           ok: true,
//           status: 200,
//           payload: generateManyCountries()
//         }
//       ]

//       service.getAll(urlEndpoint).subscribe((data) => {
//         expect(data[0].payload[0]).toEqual(mockData[0].payload[0])
//         expect(data[0].payload[1]).toEqual(mockData[0].payload[1])
//         expect(data[0].payload[2]).toEqual(mockData[0].payload[2])
//         expect(data[0].payload[3]).toEqual(mockData[0].payload[3])
//         expect(data[0].payload[4]).toEqual(mockData[0].payload[4])
//         expect(data[0].payload[5]).toEqual(mockData[0].payload[5])
//         expect(data[0].payload[6]).toEqual(mockData[0].payload[6])
//         expect(data[0].payload[7]).toEqual(mockData[0].payload[7])
//         expect(data[0].payload[8]).toEqual(mockData[0].payload[8])
//         expect(data[0].payload[9]).toEqual(mockData[0].payload[9])
//         doneFn()
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       req.flush(mockData)
//       httpController.verify()
//     })

//     it('should transform the server response', (doneFn) => {
//       const mockData: any[] = [
//         {
//           ok: true,
//           status: 200,
//           payload: [
//             {
//               id: 1,
//               name: 'Argentina',
//               active: true
//             }
//           ]
//         }
//       ]
//       const expectedData = [
//         {
//           id: 1,
//           name: 'Argentina',
//           active: true
//         }
//       ]

//       service.getAll(urlEndpoint).subscribe((data) => {
//         expect(data[0].payload).toEqual(expectedData)
//         doneFn()
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       req.flush(mockData)
//       httpController.verify()
//     })

//     it('should throw an error when the server returns an error', (doneFn) => {
//       const msgError = 'Ups algo salio mal, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.Conflict,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.getAll(urlEndpoint).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('GET')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 400', (doneFn) => {
//       const msgError = 'El país no existe'
//       const mockError = {
//         status: HttpStatusCode.BadRequest,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.getAll(urlEndpoint).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('GET')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 401', (doneFn) => {
//       const msgError = 'El acceso a esta solicitud no estas permitido'
//       const mockError = {
//         status: HttpStatusCode.Unauthorized,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.getAll(urlEndpoint).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('GET')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 500', (doneFn) => {
//       const msgError = 'Algo esta fallando en el servidor, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.InternalServerError,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.getAll(urlEndpoint).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('GET')
//       req.flush(msgError, mockError)
//     })
//   })

//   describe('test for create Countries ', () => {
//     it('should send a POST request to the correct URL', () => {
//       service.create(urlEndpoint, data).subscribe()

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('POST')
//       httpController.verify()
//     })

//     it('should return a success request', (doneFn) => {
//       const mockData: any[] = [
//         {
//           ok: true,
//           status: 200,
//           payload: generateManyCountries()
//         }
//       ]

//       service.create(urlEndpoint, data).subscribe((data) => {
//         expect(data).toEqual(mockData)
//         doneFn()
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       req.flush(mockData)
//       httpController.verify()
//     })

//     it('should throw an error when the server returns an error', (doneFn) => {
//       const msgError = 'Ups algo salio mal, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.Conflict,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.create(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('POST')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 400', (doneFn) => {
//       const msgError = 'El país no existe'
//       const mockError = {
//         status: HttpStatusCode.BadRequest,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.create(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('POST')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 401', (doneFn) => {
//       const msgError = 'El acceso a esta solicitud no estas permitido'
//       const mockError = {
//         status: HttpStatusCode.Unauthorized,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.create(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('POST')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 500', (doneFn) => {
//       const msgError = 'Algo esta fallando en el servidor, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.InternalServerError,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.create(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('POST')
//       req.flush(msgError, mockError)
//     })
//   })

//   describe('test for update Countries ', () => {
//     it('should send a PUT request to the correct URL', () => {
//       service.update(urlEndpoint, data).subscribe()

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('PUT')
//       httpController.verify()
//     })

//     it('should return a success request', (doneFn) => {
//       const mockData: any[] = [
//         {
//           ok: true,
//           status: 200,
//           payload: generateManyCountries()
//         }
//       ]

//       service.update(urlEndpoint, data).subscribe((data) => {
//         expect(data).toEqual(mockData)
//         doneFn()
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       req.flush(mockData)
//       httpController.verify()
//     })

//     it('should throw an error when the server returns an error', (doneFn) => {
//       const msgError = 'Ups algo salio mal, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.Conflict,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.update(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('PUT')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 400', (doneFn) => {
//       const msgError = 'El país no existe'
//       const mockError = {
//         status: HttpStatusCode.BadRequest,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.update(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('PUT')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 401', (doneFn) => {
//       const msgError = 'El acceso a esta solicitud no estas permitido'
//       const mockError = {
//         status: HttpStatusCode.Unauthorized,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.update(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('PUT')
//       req.flush(msgError, mockError)
//     })

//     it('should throw an error when the server returns an error 500', (doneFn) => {
//       const msgError = 'Algo esta fallando en el servidor, por favor contacte a soporte'
//       const mockError = {
//         status: HttpStatusCode.InternalServerError,
//         statusText: msgError,
//         error: [
//           {
//             payload: [
//               {
//                 message: msgError
//               }
//             ]
//           }
//         ]
//       }
//       // Act
//       service.update(urlEndpoint, data).subscribe({
//         error: (error) => {
//           expect(error).toEqual(msgError)
//           doneFn()
//         }
//       })

//       const url = `${environment.apiUrl}/catalogue/country`
//       const req = httpController.expectOne(url)
//       expect(req.request.method).toEqual('PUT')
//       req.flush(msgError, mockError)
//     })
//   })
// })
