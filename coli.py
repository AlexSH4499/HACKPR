import csv 
from flask import Flask
from flask import jsonify
from flask import request
import json

app = Flask(__name__)

def coli(city_a,city_b,actual_wage,results):

    averages = [10.88,4.36,4.38,1.42,1.05,2.30,2.20,1.10,4.05,3.06,0.59,1.43,1.55,3.57,4.44,2.32,3.48,1.14,
    2.46,1.86,5.25,3.03,2.58,1.35,3.27,1.61,933,309854,3.99,1109,180.86,95.27,73.65,170.88,28.08,37.16,2.657,98.47,
    104.26,88.55,9.46,301.41,3.88,9.29,3.74,14.63,34.93,2.50,1.01,11.85,27.93,21.92,
    29.48,69.44,19.69,9.86,4.43,2.56,48.11,8.62,8.28]

    weights = [0.0242,0.0242,0.0355,0.0383,0.0307,0.0330,0.0121,0.0048,0.0655,0.0295,0.0681,0.0277,0.0849,0.0521,0.0349,0.0426,
    0.0146,0.0145,0.0496,0.0496,0.0208,0.0122,0.0920,0.0146,0.0903,0.0335,0.2619,0,0,0.7381,0,0,0,0.5821,0.4179,0.2632,0.7368,0.0603,
    0.2665,0.3573,0.0801,0.2358,0.1178,0.1178,0.1178,0.0343,0.0343,0.0034,0.0059,0.0300,0.0411,0.0084,0.0691,0.1055,0.0135,0.0523,
    0.0523,0.0597,0.0750,0.0309,0.0309]

    weights_index = [.1396,.2780,.1023,.1212,.0441,.3148]

    city_1 = []
    city_2 = []

    with open('experiment.csv', 'rb') as f:
        reader = csv.reader(f)
        for row in reader: 
            if(row[0] == city_a):
                for x in range(1,62):
                    if(row[x] == ''):
                        row[x] = 0 
                    city_1.append(float(row[x]))  
            if(row[0] == city_b): 
                for x in range(1,62):
                    if(row[x] == ''):
                        row[x] = 0 
                    city_2.append(float(row[x]))

    for x in range (0,61): 
        city_1[x] = city_1[x] / averages[x] * 100
        city_2[x] = city_2[x] / averages[x] * 100

    for x in range (0,61): 
        city_1[x] = city_1[x] * weights[x] 
        city_2[x] = city_2[x] * weights[x] 

    for x in range (0,61): 
        if(results[x] == False):
            city_1[x] = 0
            city_2[x] = 0
            
    index_1 = [0,0,0,0,0,0]
    index_2 = [0,0,0,0,0,0]

    for x in range (0,26): 
        index_1[0] = index_1[0] + city_1[x]
        index_2[0] = index_2[0] + city_2[x]
    for x in range (26,30):
        index_1[1] = index_1[1] + city_1[x]
        index_2[1] = index_2[1] + city_2[x]
    for x in range (30,35):
        index_1[2] = index_1[2] + city_1[x]
        index_2[2] = index_2[2] + city_2[x] 
    for x in range (35,37): 
        index_1[3] = index_1[3] + city_1[x]
        index_2[3] = index_2[3] + city_2[x]
    for x in range (37,42): 
        index_1[4] = index_1[4] + city_1[x]
        index_2[4] = index_2[4] + city_2[x]
    for x in range (42,61): 
        index_1[5] = index_1[5] + city_1[x]
        index_2[5] = index_2[5] + city_2[x]

    for x in range (0,len(index_1)): 
        index_1[x] = index_1[x] * weights_index[x]
        index_2[x] = index_2[x] * weights_index[x]

    city_1 = index_1
    city_2 = index_2

    city_1.append(0)
    city_2.append(0) 

    for x in range (0,6):
        city_1[6] = city_1[6] + city_1[x]
        city_2[6] = city_2[6] + city_2[x]
        
    coi_difference = (city_2[6] - city_1[6]) / city_1[6]
    equivalent_wage = actual_wage * (1 + coi_difference) 
    grocery = 100*((city_2[0] - city_1[0]) / city_1[0])
    housing = 100*((city_2[1]  - city_1[1]) / city_1[1])
    utilities = 100*((city_2[2]  - city_1[2]) / city_1[2])
    healthcare = 100*((city_2[3]  - city_1[3]) / city_1[3])
    transportation = 100*((city_2[4]  - city_1[4]) / city_1[4])    
    miscellaneous = 100*((city_2[5]  - city_1[5]) / city_1[5])

    print equivalent_wage 
    print grocery
    print housing 
    print utilities
    print transportation
    print healthcare  
    print miscellaneous

city_a = "Anniston-Calhoun County AL"
city_b = "San Juan PR"
actual_wage = 40000
results = [True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,
True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,
True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True]

coli(city_a,city_b,actual_wage,results)





      
