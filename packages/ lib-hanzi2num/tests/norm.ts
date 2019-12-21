import 'should'
import { norm } from "../source/main"



describe('norm testing', function () {
    it('T1', function () {
        const out = norm('壹拾壹')
        out.should.equal('一十一')
    })
})
