import csv 

def coli(city_a, city_b, actual_wage):
    with open('your_csv_file.csv', 'rb') as f:
        reader = csv.reader(f)
        for row in reader:
            if (row[3] == city_a): 
                city_a_coi = float(row[4])
            if (row[3] == city_b): 
                city_b_coi = float(row[4])   
    coi_difference = (city_b_coi - city_a_coi) / city_a_coi
    equivalent_wage = actual_wage * (1 + coi_difference) 
    print equivalent_wage 

if (1==0):
    wb = xlrd.open_workbook('COLI 2014Q3 - 2015Q3.xls')
    sh = wb.sheet_by_index(3)
    your_csv_file = open('your_csv_file.csv', 'wb')
    wr = csv.writer(your_csv_file, quoting=csv.QUOTE_ALL)
    for rownum in xrange(sh.nrows):
        wr.writerow(sh.row_values(rownum))
    your_csv_file.close()

coli("Anniston-Calhoun County AL","San Juan PR", 40000)


    

