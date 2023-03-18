// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';

// import { EndpointsService } from './endpoints.service';

// describe('EndpointsService', () => {
//   let service: EndpointsService
//   let httpController: HttpTestingController

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [EndpointsService]
//     })

//     service = TestBed.inject(EndpointsService)
//     httpController = TestBed.inject(HttpTestingController)
//   })

//   it('should be create', () => {
//     expect(service).toBeTruthy()
//   })

//   describe('EndpointsService', () => {
//     let service: EndpointsService

//     beforeEach(() => {
//       service = new EndpointsService()
//     })

//     it('should have the correct url keys and values', () => {
//       const expectedUrl = {
//         city: ['/catalogue/city'],
//         country: ['/catalogue/country'],
//         institution: ['/catalogue/institution'],
//         material: ['/catalogue/material'],
//         pathology: ['/catalogue/pathology'],
//         pathologiesCountry: ['/catalogue/pathology_country'],
//         pathologiesCountryManifest: ['/catalogue/pathology_country_manifest'],
//         pathologiesCountryStudy: ['/catalogue/pathology_country_study_types'],
//         pathologySymptom: ['/catalogue/pathology_symptom'],
//         pathologyTest: ['/catalogue/pathology_test'],
//         studyTypesTestTypes: ['/catalogue/study_types_test_types'],
//         state: ['/catalogue/state'],
//         specialty: ['/catalogue/specialty'],
//         studyTypeGather: ['/catalogue/study_type_gather'],
//         symptom: ['/catalogue/symptom'],
//         testType: ['/catalogue/test_type'],
//         events: ['/event'],
//         sampleInfo: ['/request/SampleInfo'],
//         gatherInfo: ['/request/GatherInfo'],
//         kitInfo: ['/request/kit-request']
//       }
//       expect(service.url).toEqual(expectedUrl)
//     })

//     it('should not modify the url object', () => {
//       const originalUrl = { ...service.url }
//       service.url.city.push('/new/path')
//       expect(service.url).toEqual(originalUrl)
//     })
//   })
// })
