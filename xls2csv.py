import xlrd 
import csv
    wb = xlrd.open_workbook('COLI 2014Q3 - 2015Q3.xls')
    sh = wb.sheet_by_index(3)
    your_csv_file = open('your_csv_file.csv', 'wb')
    wr = csv.writer(your_csv_file, quoting=csv.QUOTE_ALL)
    for rownum in xrange(sh.nrows):
        wr.writerow(sh.row_values(rownum))
    your_csv_file.close()
